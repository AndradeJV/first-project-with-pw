import test, { expect } from "@playwright/test";
import apis from "../../../env/apis.json"


test('Realizar get geral nas atividades', async ({ request }) => {
    const newIssue = await request.get(apis.fakerApi + "Activities");

    expect(newIssue).toBeTruthy();
    // expect(newIssue.status)
});