'use client';

import { useEffect } from 'react';
import { installAppPlugin } from '@/plugins/appPlugins';

export default function AppPlugin() {
  useEffect(() => {
    installAppPlugin();
  }, []);

  return null;
}
