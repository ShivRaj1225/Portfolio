// src/data/projectsData.js
import { NFT } from '../assets/assetsindex.js'; // Ensure assets are imported
export const projectsData = [
  {
    id: 1,
    title: "NFT Marketplace",
    slug: "nft",
    description:
      "A decentralized NFT marketplace to mint, list, buy, and sell NFTs. Features include MetaMask wallet integration, IPFS asset storage, live marketplace listings, and smart contracts via Solidity. Built using Next.js, Tailwind CSS, and Hardhat.",
    overview: `This NFT Marketplace is a decentralized web platform that allows users to mint, buy, and sell unique digital assets directly on the Ethereum blockchain. By integrating smart contracts with a sleek frontend, it eliminates the need for intermediaries, ensuring a transparent and secure exchange of NFTs.

The project utilizes IPFS (via Pinata) for decentralized storage, ensuring that media files such as artwork or collectibles remain tamper-proof and permanently accessible. Smart contracts developed in Solidity handle all listing, bidding, and transaction logic in a trustless environment.

The frontend is developed using Next.js and Tailwind CSS for a responsive and fast user experience. MetaMask integration enables users to connect their wallets seamlessly, manage assets, and interact with the blockchain in real-time.

Behind the scenes, Ethers.js handles blockchain communication, while Vercel powers the fast global deployment. The marketplace supports scalability, minimal gas operations, and can be extended to support royalties, multiple collections, or ERC-1155 tokens in future iterations.`,
    techStack: ["Next.js", "Tailwind", "Solidity", "Hardhat", "IPFS"],
    tools: [
      "MetaMask",
      "Pinata",
      "Vercel",
      "Ethers.js",
      "React",
      "Node.js",
      "MongoDB",
    ],
    liveLink: "https://nft-new-eight.vercel.app/",
    githubLink: "https://github.com/shivraj/nft-marketplace",
    image: NFT,
  },
];