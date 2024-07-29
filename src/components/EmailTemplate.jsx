import * as React from 'react';

// Le fichier JavaScript n'a pas besoin de types, donc supprimez l'interface
// const EmailTemplate = ({ firstName }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );

// Ou utilisez une fonction de déclaration classique pour plus de clarté
export function EmailTemplate({ username , rating, content, ponctualite, confort, proprete, professionnalisme }) {
  return (
    <div>

      <h1>Vous avez un  nouveau témoignage !</h1>
      <h2>De la part de : {username}</h2>
      <h3>Note : {rating}</h3>
      <p>{content}</p>
      <h3>Confort : {confort}</h3>
      <h3>Professionnalisme : {professionnalisme}</h3>
      <h3>Ponctualité : {ponctualite}</h3>
      <h3>Propreté : {proprete}</h3>
    </div>
  );
}
