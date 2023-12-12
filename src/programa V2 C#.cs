using Microsoft.EntityFrameworkCore;
using System;

// Definindo as entidades (tabelas)
public class Aluno
{
    public int IdAluno { get; set; }
    public string Nome { get; set; }
    public string Matricula { get; set; }
}

public class Livro
{
    public int IdLivro { get; set; }
    public string Titulo { get; set; }
    public string Autor { get; set; }
    public string ISBN { get; set; }
}

public class Emprestimo
{
    public int IdEmprestimo { get; set; }
    public int IdAluno { get; set; }
    public int IdLivro { get; set; }
    public DateTime DataEmprestimo { get; set; }
    public DateTime? DataDevolucao { get; set; }
    public string Status { get; set; }
}

// Contexto do banco de dados usando Entity Framework Core
public class BibliotecaContext : DbContext
{
    public DbSet<Aluno> Alunos { get; set; }
    public DbSet<Livro> Livros { get; set; }
    public DbSet<Emprestimo> Emprestimos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql("sua-string-de-conexao-postgresql");
    }
}

class Program
{
    static void Main()
    {
        using (var context = new BibliotecaContext())
        {
            // Criar as tabelas no banco de dados
            context.Database.EnsureCreated();
        }
    }
}
