
const Form = ({input, fetch, value, pokemonName}) => {
    return ( 
        <form onSubmit={input !== "" ? fetch : null}>
        <input
          type="text"
          onChange={value}
          value={input} placeholder="Search Pokemon"
          list="Pokemon"
        />
        <datalist id="Pokemon">
          {pokemonName.map((pokemon)=>{
            return <option key={pokemon} value={pokemon}/>
          })}
        </datalist>
        <input type="submit" value="Search" />
      </form>
     );
}
 
export default Form;