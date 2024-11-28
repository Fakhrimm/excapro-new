import { createUser } from "./queries/insert.js";

export async function main() {
  await createUser({
    name: "Alice",
    age: 30,
    email: "test",
  })
}

main().catch(console.error);