import React, { useEffect, useState } from 'react';
import { rootContainer } from '../../inversify.config';
import { MyHomeIpService } from '../../services/my-home-ip-service';

export default function HomeIpContainer() {
  const [myIp, setMyIp] = useState<string>('');
  useEffect(() => {
    const service = rootContainer.get<MyHomeIpService>(MyHomeIpService);
    service.getMyhomeIp().then((ip) => {
      setMyIp(ip);
    });
  }, []);
  return <div className="ip-addr">{myIp}</div>;
}
