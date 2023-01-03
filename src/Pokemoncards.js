const Pokemoncards = ({
  name,
  type,
  link,
  text,
  stats,
  abilities,
}) => {
  return (
    <div className="cards">
      <h1>{name}</h1>
      <img className={type} src={link} alt={text} />
      <h2>stats</h2>
      <div className="stats">
        {stats.map((stat) => {
          return (
            <div className="stats-value" key={stat.stat.name}>
              <div className="stats-name">{stat.stat.name}</div>
              <div className="stats-numbers">{stat.base_stat}</div>
            </div>
          );
        })}
      </div>
      <h2>abilities</h2>
      <div className="abilities">
        {abilities.map((ability) => {
          return <div key={ability.ability.name}>{ability.ability.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Pokemoncards;
