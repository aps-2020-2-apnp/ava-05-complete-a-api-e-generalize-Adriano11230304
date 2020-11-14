import { createServer } from 'http'
import { parse } from 'url'

interface Usuario {
  nome: string
  sobrenome: string
}

interface Produto {
  descricao: string
  preco: number
}
let usuarioCont = 0
const usuarios: Record<number, Usuario> = {}
let produtoCont = 0
const produtos: Record<number, Produto> = {}

const porta = 9999;

const servidor = createServer((req, resp) => {
  const url = parse(req.url ?? '', true)
  switch (url.pathname) {
    case '/usuarios': { // roteamento
      if (req.method === 'GET') {
        resp.writeHead(200, {'Content-Type': 'application/json'})
        resp.end(JSON.stringify(usuarios))
        break
      } else if (req.method === 'POST') {
        let corpo = ''
        req.on('data', (parte) => corpo += parte)
        req.on('end', () => {
          const obj = JSON.parse(corpo)
          usuarios[++usuarioCont] = obj
          resp.writeHead(200, { 'Content-Type': 'text/plain' })
          resp.end('Usuario Salvo')
        })
        break
      }
    }
    case '/usuario': {
      if (req.method === 'GET') {
        if (url.query.id) {
          if (typeof(url.query.id) === 'string') {
            const id = parseInt(url.query.id, 10)
            if (usuarios[id]) {
              resp.writeHead(200, { 'Content-Type': 'application/json' })
              resp.end(JSON.stringify(usuarios[id]))
              break
            }
          }
        }
      } else if (req.method === 'DELETE') {
        if (url.query.id) {
          if (typeof (url.query.id) === 'string') {
            const id = parseInt(url.query.id, 10)
            if (usuarios[id]) {
              resp.writeHead(200, { 'Content-Type': 'text/plain' })
              delete usuarios[id]
              resp.end('Usuario Deletado')
              break
            }
          }
        }
      }
      resp.writeHead(404)
      resp.end('Not Found (Nao Encontrado)')
    }
    case '/produtos': {
      if (req.method === 'GET') {
        resp.writeHead(200, {'Content-Type': 'application/json'})
        resp.end(JSON.stringify(produtos))
        break
      } else if (req.method === 'POST') {
        let corpo = ''
        req.on('data', (parte) => corpo += parte)
        req.on('end', () => {
          const obj = JSON.parse(corpo)
          produtos[++produtoCont] = obj
          resp.writeHead(200, { 'Content-Type': 'text/plain' })
          resp.end('Produto Salvo')
        })
        break
      }
    }
    case '/produto': {
      if (req.method === 'GET') {
        if (url.query.id) {
          if (typeof (url.query.id) === 'string') {
            const id = parseInt(url.query.id, 10)
            if (produtos[id]) {
              resp.writeHead(200, { 'Content-Type': 'application/json' })
              resp.end(JSON.stringify(produtos[id]))
              break
            }
          }
        }
      } else if (req.method === 'DELETE') {
        if (url.query.id) {
          if (typeof (url.query.id) === 'string') {
            const id = parseInt(url.query.id, 10)
            if (produtos[id]) {
              resp.writeHead(200, { 'Content-Type': 'text/plain' })
              delete produtos[id]
              resp.end('Produto Deletado')
              break
            }
          }
        }
      }
    }
    default: {
      resp.writeHead(404)
      resp.end('Not Found (Nao Encontrado)')
    }
  }
})

servidor.listen(porta, () => {
  console.log('Servidor rodando em http://localhost:9999')
})
