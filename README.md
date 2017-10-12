# Frontend

Dentro da pasta raíz do projeto execute os seguintes comandos

```
  npm install // instala todas as dependências
  npm run dev // gera todos os arquivos html, css e javascript
  npm run start // roda um servidor de teste no localhost:8080 com HotReload 
  
```

- O comando `npm  run start` abre automaticamente o browser 

- Após rodar o comando `npm  run start` só será necessário rodar o comando `npm run dev` novamente
apenas se for adicionados novos arquivos, pois o HotReload recompila quaisquer alterações nos arquivos já  existentes


### Exemplo utilizando os componentes `.vue`

##### Adicionando um novo componente `.vue`

   Dentro da pasta `src` do projeto adicione um novo arquivo com o formato `.vue`, que deve ter o seguinte template:
    
        <template>
          // seus elementos html vai aqui
        </template>
        <script>
          // Caso seu componente possua outro componente .vue
          import OutroComponente from './OutroComponente.vue
      
          export default {
            name: 'example1,
            components: { OutroComponente }
          }
      
         </script>
            // o atributo scoped define que o css se aplicará somente a elementos do atual componente
         <style scoped></style>
