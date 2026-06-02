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

function App() {


  return (
    <ProdutoProvider>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/produto" element={<Produto />}/>
      <Route path="/cadastrarProduto" element={<CadastrarProduto />}/>
      <Route path="/listarProduto" element={<ListarProduto />}/>
      </Routes>
      </BrowserRouter>
      </ProdutoProvider>
  )
}

export default App
