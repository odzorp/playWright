import { test, expect } from "@playwright/test";

test("API POST REQUEST", async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
      data: {
        name: "wonders",
        job: "SLI",
      },
    });
  
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain("wonders");
    console.log(text);
    console.log(await response.json());
  });
  
  test("API PUT REQUEST", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/763", {
      data: {
        name: "wonders",
        job: "QA Engineer",
      },
    });
  
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain("wonders");
    console.log(text);
    console.log(await response.json());
  });
  

test("API GET REQUEST", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/763");
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("wonders");
  console.log(text);
  console.log(await response.json());
});


test("API DELETE REQUEST", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/763");
  
    expect(response.status()).toBe(204); // Assuming a successful deletion returns a 204 status code
    console.log(response.status());
  });
