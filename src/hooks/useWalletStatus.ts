import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export function useWalletStatus() {
  const { isConnected, address } = useAccount();
  return { isConnected, address };
}
