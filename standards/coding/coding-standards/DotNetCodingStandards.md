# .Net Coding Standards

.Net code should be in C# using the latest LTS release appropriate to the project.

The UK Hydrographic Office has adopted the Microsoft C# Coding Conventions:  <https://github.com/dotnet/runtime/blob/main/docs/coding-guidelines/coding-style.md> with the following notes and exceptions:

## Async methods

async methods should have an `Async` suffix.  e.g.

```cs
    public Task<string> BuildCatalogueAsync()
```

## var

Use `var` unless there is a specific reason not to.
