import React, { useState } from 'react'

const HomeNavbar = () => {
  const [wallet, setWallet] = useState('')

  // Mock wallet connection function
  const connectWallet = async () => {
    try {
      // Simulate wallet connection with a mock address
      const mockAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
      setWallet(mockAddress)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  // Utility function to truncate text
  const truncate = ({ text, startChars = 4, endChars = 4, maxLength = 11 }) => {
    if (text.length <= maxLength) return text
    
    const start = text.slice(0, startChars)
    const end = text.slice(-endChars)
    return `${start}...${end}`
  }

  return (
    <nav
      className="h-[80px] flex justify-between items-center border border-gray-400 
      px-5 rounded-full"
    >
      <button className="text-[20px] text-blue-800 sm:text-[24px]">
        Ho<span className="text-white font-bold">me</span>
      </button>
      {wallet ? (
        <button
          className="h-[48px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300 bg-[#1B5CFE] hover:bg-blue-500"
        >
          {truncate({ text: wallet, startChars: 4, endChars: 4, maxLength: 11 })}
        </button>
      ) : (
        <button
          className="h-[48px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300 bg-[#1B5CFE] hover:bg-blue-500"
          onClick={connectWallet}
        >
          Connect wallet
        </button>
      )}
    </nav>
  )
}

export default HomeNavbar