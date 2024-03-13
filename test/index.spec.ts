import { beforeAll, describe, expect, it, mock } from "bun:test";
import { PORT, app } from "../src";

describe("index.ts", () => {
  beforeAll(() => {
    app.listen(PORT);
  });

  const fetchMock = mock(async () => {
    const response = await fetch(`http://localhost:${PORT}`);

    return response;
  });

  it("can be fetched", async () => {
    const response = await fetchMock();

    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toHaveBeenCalledTimes(1);

    expect(await response.text()).toBe("Hello Elysia");
  });
});
