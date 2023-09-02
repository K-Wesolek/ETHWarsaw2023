// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Define a struct for the gaming asset attributes
    struct GameAsset {
        string name;
        uint256 level;
        string assetType;
    }

    // Map each token ID to its GameAsset attributes
    mapping(uint256 => GameAsset) public gameAssets;

    constructor() ERC721("MyNFT", "MNFT") {}

    // Mint a new NFT. Only the owner can mint.
    function mintNFT(
        address recipient,
        string memory uri,
        string memory name,
        uint256 level,
        string memory assetType
    ) external onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();

        // Mint the NFT
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, uri);

        // Set the gaming asset attributes
        GameAsset memory newAsset = GameAsset(name, level, assetType);
        gameAssets[tokenId] = newAsset;

        return tokenId;
    }

    // Get the attributes of a gaming asset
    function getGameAsset(
        uint256 tokenId
    )
        external
        view
        returns (string memory name, uint256 level, string memory assetType)
    {
        GameAsset memory asset = gameAssets[tokenId];
        return (asset.name, asset.level, asset.assetType);
    }
}
