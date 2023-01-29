import { GraphQLClient } from "graphql-request";

export function request(props: any) {
  const { query } = props;
  const headers = {
    authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzI5MzM5MDksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xjajlibWt2MDQ2eTAxdWY2aWkwOHcxei9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTQ1OTQ0ZGEtNDE4ZC00Y2I4LWE2NTEtMjhiMmFiNzJjZDFkIiwianRpIjoiY2xjajlubHljMDRpdzAxdDkwbnpjYTlydSJ9.RBIMuJtKGhDH3byz_gvVSmRhxjnywViLkkf2H_MJym6s0ldkaLn09g660e9nIBIdSeIMsXVJRgtXkEvcK1Ooox3QdUODrS7oxn34eQGFUIQYmXy9WN9Nj1OUcCNRXhQ7EtAxFGGvIEFXg36LJwjovGdFn1B2uSalpcaRwEcMK4jPcKGJFuXipn1vP-FH3vJYuO3muAerkLAizKNhNMhE-ft-wwKckEQibXIqk2slu701PmbN8vRcgEc_Pl3Wbs8mKynvx4ChAo_NCnCYdU78yPiNrHIyBCkV6bzLUTjTP30HNPiXGBxeEuIm2Pp6qvGlNFMNgwiUPRlzdGVjXUi4cOGwQmNYlrpKkRg2ZDaFgwgvigemgUBbOM9H4dlYyrsSQkEQIwMJg4_O81Kdyw_pjC-hfo_Z1ojaHbbKvlA_Pk2xtmjLxYq-lCY578PQXacdFlDlgCM1r8ZJlHkDCVFdC8IXAdtgFfKpGPOBmiDEGBKGe6Hn_TNd6AaZrAlb1GCpIBxxi5EHpJcKSAMfgRlQsUv2d4qNzmhckhryxBbgWh-hbEspSsGxZBm8meWp7iOTLB1SrQtpKjCuJr-kEorE9FuEnO1yAjpRmsX4dZozvjSEF5Qwmf724Sr_a_42WszlF0LN7HhIdezM8FwHi3buIKspCU-a-rm6nKv6HF2K11I`,
    "gcms-stage":"PUBLISHED"
  };
 
  const client = new GraphQLClient('https://sa-east-1.cdn.hygraph.com/content/clcj9bmkv046y01uf6ii08w1z/master', { headers });  

  return client.request(query);
}

export function post(props: any) {
  const { query } = props;
  const headers = {
    authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzI5MzM5MDksImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xjajlibWt2MDQ2eTAxdWY2aWkwOHcxei9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTQ1OTQ0ZGEtNDE4ZC00Y2I4LWE2NTEtMjhiMmFiNzJjZDFkIiwianRpIjoiY2xjajlubHljMDRpdzAxdDkwbnpjYTlydSJ9.RBIMuJtKGhDH3byz_gvVSmRhxjnywViLkkf2H_MJym6s0ldkaLn09g660e9nIBIdSeIMsXVJRgtXkEvcK1Ooox3QdUODrS7oxn34eQGFUIQYmXy9WN9Nj1OUcCNRXhQ7EtAxFGGvIEFXg36LJwjovGdFn1B2uSalpcaRwEcMK4jPcKGJFuXipn1vP-FH3vJYuO3muAerkLAizKNhNMhE-ft-wwKckEQibXIqk2slu701PmbN8vRcgEc_Pl3Wbs8mKynvx4ChAo_NCnCYdU78yPiNrHIyBCkV6bzLUTjTP30HNPiXGBxeEuIm2Pp6qvGlNFMNgwiUPRlzdGVjXUi4cOGwQmNYlrpKkRg2ZDaFgwgvigemgUBbOM9H4dlYyrsSQkEQIwMJg4_O81Kdyw_pjC-hfo_Z1ojaHbbKvlA_Pk2xtmjLxYq-lCY578PQXacdFlDlgCM1r8ZJlHkDCVFdC8IXAdtgFfKpGPOBmiDEGBKGe6Hn_TNd6AaZrAlb1GCpIBxxi5EHpJcKSAMfgRlQsUv2d4qNzmhckhryxBbgWh-hbEspSsGxZBm8meWp7iOTLB1SrQtpKjCuJr-kEorE9FuEnO1yAjpRmsX4dZozvjSEF5Qwmf724Sr_a_42WszlF0LN7HhIdezM8FwHi3buIKspCU-a-rm6nKv6HF2K11I`,
    "gcms-stage":"PUBLISHED"
  };
 
  const client = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/clcj9bmkv046y01uf6ii08w1z/master', { headers });  

  return client.request(query);
} 