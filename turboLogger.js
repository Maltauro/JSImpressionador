// U ao lado do arquivo, indica que o arquivo não foi rastreado, untracked. Ainda precisa sofrer add e comit
// M ao lado do arquivo, indica que o arquivo foi modificado, modified. Ainda precisa sofrer commit
// A ao lado do arquivo, indica que o arquivo foi adicionado, add. Ainda precisa sofrer commit
// Ou seja, precisa rodar no terminal git add ./turboLogger.js
// Adicionar mais de um arquivo de uma vez, rode git add .
// git status ajuda a ver o que está acontecendo no git

// Adicionar arquivo package.json, no terminal digite npm init
// clique enter para tudo, apenas para ter o arquivo no package.json.
// Adicione a propriedade "type":"module" no package.json
// para o ter certeza que o git não vai dar problema com as importações.

// Para visualizar a moficação de cor, vamos visualizar no DEBUG CONSOLE, F5, digite ou clique Node.js, e Run and Debug
// Essa modificação de cor não pode ser vista no Console.
export const turboLogger = (message, textColor = "red") => {
  const textSytle = `color: ${textColor}`;
  console.log(`${message}, textSyle`);
};

console.log("adicionado e modificado");
