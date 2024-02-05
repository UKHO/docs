# .Net Coding Standards

.Net code should be in C# using the latest LTS release appropriate to the project.

The UK Hydrographic Office has adopted the Microsoft C# Coding Conventions:  <https://github.com/dotnet/runtime/blob/main/docs/coding-guidelines/coding-style.md> with the following notes and exceptions:

## Fields

private and internal fields do not have a prefix, i.e. no `_` or `s_` prefixes.

e.g.

```cs
    private static string aStaticField;
    private string privateField;
```

## Async methods

async methods should have an `Async` suffix.  e.g.

```cs
    public Task<string> BuildCatalogueAsync()
```

## var

We tend to use `var` everywhere.
