import React, { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (email, password) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({ email, isPremium: false })
    setLoading(false)
  }

  const logout = () => {
    setUser(null)
  }

  const register = async (email, password) => {
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({ email, isPremium: false })
    setLoading(false)
  }

  const upgradeToPremium = () => {
    setUser((prevUser) => ({ ...prevUser, isPremium: true }))
  }

  const value = {
    user,
    login,
    logout,
    register,
    upgradeToPremium,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

