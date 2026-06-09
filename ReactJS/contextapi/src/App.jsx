import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import Produto from './components/produtos/Produto'
import CadastrarProduto from './components/cadastrarProduto/CadastrarProduto'
import ListarProduto from './components/listar/ListarProduto'
import { ProdutoProvider } from './context/ProdutoProvider'
import PrivateRoute from './routes/PrivateRoute'


function App() {


  return (
    <ProdutoProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/perfil" element={<Perfil />}/>

      <Route path="/produto" element={
        <PrivateRoute>
        <Produto />
        </PrivateRoute>}/>
        
      <Route path="/cadastrarProduto" element={
        <PrivateRoute>
        <CadastrarProduto />
        </PrivateRoute>
      }/>
      <Route path="/listarProduto" element={
        <PrivateRoute>
        <ListarProduto />
        </PrivateRoute>}/>
        
        
      </Routes>
      </BrowserRouter>
      </ProdutoProvider>
  )
}

export default App
