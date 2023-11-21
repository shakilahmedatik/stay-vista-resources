import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useRole from '../../../hooks/useRole'
import { Helmet } from 'react-helmet-async'
import AdminStatistics from '../../../components/Dashboard/Statistics/Admin/AdminStatistics'
import GuestStatistics from '../../../components/Dashboard/Statistics/Guest/GuestStatistics'
import HostStatistics from '../../../components/Dashboard/Statistics/Host/HostStatistics'

const Statistics = () => {
  const [role] = useRole()
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      {role === 'guest' && <GuestStatistics />}
      {role === 'host' && <HostStatistics />}
      {role === 'admin' && <AdminStatistics />}
    </div>
  )
}

export default Statistics
