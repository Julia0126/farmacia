import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { listar, atualizar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function FormCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  
    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
  
    async function buscarPorId(id: string) {
      await listar(`/categorias/${id}`, setCategoria, {
  
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(categoria))
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/categorias`, categoria, setCategoria, {
  
          })
  
          toastAlerta('Categoria atualizada com sucesso', 'sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('Erro ao atualizar a Categoria', 'erro')
            
          } else {
            toastAlerta('Erro ao atualizar a Categoria', 'erro')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/categorias`, categoria, setCategoria, {
  
          })
  
          toastAlerta('Categoria cadastrada com sucesso', 'sucesso')
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('Erro ao cadastrar a categoria', 'erro')
            
          } else {
            toastAlerta('Erro ao cadastrar a categoria', 'erro')
          }
        }
      }
  
      retornar()
    }
  
    function retornar() {
      navigate("/categorias")
    }
  
  
  
    return (
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
          {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
        </h1>
  
        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição da categoria</label>
            <input
              type="text"
              placeholder="Nome da categoria"
              name='nome'
              className="border-2 border-slate-700 rounded p-2"
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <input
              type="text"
              placeholder="Descrição"
              name='descricao'
              className="border-2 border-slate-700 rounded p-2"
              value={categoria.descricao || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            
          </div>
          <button
            className="rounded text-slate-100 bg-teal-400 hover:bg-teal-700 w-1/2 py-2 mx-auto block"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </form>
      </div>
    );
  }
  
  export default FormCategoria;