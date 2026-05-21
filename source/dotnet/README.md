## Test the sample

With the server running in one terminal, open another terminal and run the following command:

```bash
npx @modelcontextprotocol/inspector dotnet run
```

### Testing in CLI mode

You can launch it directly in CLI mode by running the following command:

```bash
npx @modelcontextprotocol/inspector --cli dotnet run --method tools/list
```

To invoke a tool type:

```bash
npx @modelcontextprotocol/inspector --cli dotnet run --method tools/call --tool-name Add --tool-arg a=1 --tool-arg b=2
```