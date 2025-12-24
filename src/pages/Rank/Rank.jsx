import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Ranks.css'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line
} from 'recharts'

function Rank() {
  const [stats, setStats] = useState({
    totalSkins: 0,
    totalUsers: 0,
    totalAdmins: 0,
    totalOrders: 0,
    topUsers: [],
    topOrders: []
  })

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6b6b']

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skinsRes = await axios.get('https://api.npoint.io/6404427173fedb3ae6b3')
        const usersRes = await axios.get('https://68c65fd9442c663bd026db89.mockapi.io/users')
        const adminsRes = await axios.get('https://68c65fd9442c663bd026db89.mockapi.io/admins')
        const ordersRes = await axios.get('https://689dcd78ce755fe6978a0e23.mockapi.io/ToDoListApi/devliver')

        const topUsers = [...usersRes.data]
          .sort((a,b)=> (b.coin||0)-(a.coin||0))
          .slice(0,5)
          .map(u=>({name:u.name, coin:u.coin}))

        const topOrders = [...ordersRes.data]
          .sort((a,b)=> b.buyvalue - a.buyvalue)
          .slice(0,5)
          .map(o=>({name:o.name, buyvalue:o.buyvalue}))

        setStats({
          totalSkins: skinsRes.data.length,
          totalUsers: usersRes.data.length,
          totalAdmins: adminsRes.data.length,
          totalOrders: ordersRes.data.length,
          topUsers,
          topOrders
        })
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const pieData = [
    { name: 'Skins', value: stats.totalSkins },
    { name: 'Users', value: stats.totalUsers },
    { name: 'Admins', value: stats.totalAdmins },
    { name: 'Orders', value: stats.totalOrders }
  ]

  return (
    <div className="rank-page">
      <h1>Platform Statistics</h1>

      {/* PIE CHART */}
      <div className="chart-card">
        <p>This chart shows overall distribution of Skins, Users, Admins, and Orders in the platform.</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              animationDuration={1000}
            >
              {pieData.map((entry,index)=>(
                <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]} />
              ))}
            </Pie>
            <Tooltip/>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART TOP USERS */}
      <div className="chart-card">
        <p>Top 5 users based on coin holdings in the platform.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.topUsers} margin={{top:20,right:30,left:0,bottom:5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="coin" fill="#82ca9d" animationDuration={800}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART TOP ORDERS */}
      <div className="chart-card">
        <p>Top 5 orders based on buy value, showing which customers made the highest purchases.</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.topOrders} margin={{top:20,right:30,left:0,bottom:5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="buyvalue" fill="#ffc658" animationDuration={800}/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LINE CHART ORDERS TREND */}
      <div className="chart-card">
        <p>Orders trend: visualizing the progression of top orders over time (sorted by buy value).</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats.topOrders} margin={{top:20,right:30,left:0,bottom:5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="buyvalue" stroke="#ff6b6b" activeDot={{r:8}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Rank
