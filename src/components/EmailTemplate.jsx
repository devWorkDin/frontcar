import * as React from "react";

// Le fichier JavaScript n'a pas besoin de types, donc supprimez l'interface
// const EmailTemplate = ({ firstName }) => (
//   <div>
//     <h1>Welcome, {firstName}!</h1>
//   </div>
// );

// Ou utilisez une fonction de déclaration classique pour plus de clarté
export function EmailTemplate({
  username,
  rating,
  content,
  ponctualite,
  confort,
  proprete,
  professionnalisme,
}) {
  return (
    
    <div>
      <h1>Vous avez un nouveau témoignage !</h1>
      <h2>De la part de : {username}</h2>
      <h3>Note : {rating}</h3>
      <h3>Contenu : {content}</h3>
      <h3>Confort : {confort ? "Oui" : "Non"}</h3>
      <h3>Professionnalisme : {professionnalisme ? "Oui" : "Non"}</h3>
      <h3>Ponctualité : {ponctualite ? "Oui" : "Non"}</h3>
      <h3>Propreté : {proprete ? "Oui" : "Non"}</h3>
    </div>
    
  );
}
