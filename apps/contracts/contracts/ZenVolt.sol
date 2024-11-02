// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// VBetter Token contract
contract VBetter is ERC20, Ownable {

    // Constructor to initialize the token
    constructor(
        string memory name, 
        string memory symbol, 
        address initialOwner
    ) 
        ERC20(name, symbol) 
        Ownable(initialOwner) 
    {
        _mint(initialOwner, 1000000 * 10 ** decimals()); 
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}

// ZenVolt main contract
contract ZenVolt {
    struct Driver {
        string name;
        string licenseNo;
        uint256 rewardBalance;
    }

    VBetter public vBetterToken;
    mapping(address => Driver) public drivers;
    
    event DriverRegistered(address driverAddress, string name, string licenseNo);
    event RewardSent(address driverAddress, uint256 rewardAmount);

    modifier onlyRegistered() {
        require(bytes(drivers[msg.sender].licenseNo).length > 0, "Driver is not registered.");
        _;
    }

    constructor(address _vBetterTokenAddress) {
        vBetterToken = VBetter(_vBetterTokenAddress);
    }

    function registerDriver(string memory _name, string memory _licenseNo) public {
        require(bytes(drivers[msg.sender].licenseNo).length == 0, "Driver is already registered.");
        drivers[msg.sender] = Driver(_name, _licenseNo, 0);
        emit DriverRegistered(msg.sender, _name, _licenseNo);
    }

    function sendReward(uint256 _rewardAmount) public onlyRegistered {
        require(vBetterToken.balanceOf(address(this)) >= _rewardAmount, "Insufficient tokens.");
        vBetterToken.transfer(msg.sender, _rewardAmount);
        emit RewardSent(msg.sender, _rewardAmount);
    }

    receive() external payable {}
}
