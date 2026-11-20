function Tache({ titre, terminee }) {
  return (
    <li className={terminee ? 'tache terminee' : 'tache'}>
      <span aria-hidden="true">{terminee ? '✅' : '⬜'}</span>
      <span className="titre">{titre}</span>
    </li>
  )
}

export default Tache
