import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "Example MCP Server",
  version: "1.0.0",
});

// Handler function for subtraction
async function subtractionHandler({
  a,
  b,
}: {
  a: number;
  b: number;
}): Promise<{ content: { type: "text"; text: string }[] }> {
  return {
    content: [{ type: "text" as const, text: String(a - b) }],
  };
}

// Register addition tool
server.tool("addition", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
  content: [{ type: "text" as const, text: String(a + b) }],
}));

// Register subtraction tool
server.tool(
  "subtraction",
  { a: z.number(), b: z.number() },
  subtractionHandler,
);

// Add a dynamic greeting resource
server.resource(
  "file",
  new ResourceTemplate("file://{path}", { list: undefined }),
  async (uri, { path }) => ({
    contents: [
      {
        uri: uri.href,
        text: `File, ${path}!`,
      },
    ],
  }),
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
