import UseFiltroCpf from '../../hooks/UseFiltreCpf'
import UseFiltrarTodos from '../../hooks/UseFiltrarTodos'
function ControlarEmprestimos() {
  return (
    <>
    <p>Quais sao os filtros que voce esta querendo</p>
    <br />
    <UseFiltroCpf/>
    <br />
   <UseFiltrarTodos/>
    </>
  )
}

export default ControlarEmprestimos