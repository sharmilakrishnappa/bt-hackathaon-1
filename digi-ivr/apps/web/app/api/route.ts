import fs from "fs";
import { NextResponse } from "next/server";
export async function GET() {
  const file = await fs.promises.readFile(
    process.cwd() + "/public/data.json",
    "utf8"
  );

  return NextResponse.json(JSON.parse(file));
}
