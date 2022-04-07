import { delta } from "./delta"

it (`descobrindo o delta de x`, () => {
    expect(delta(2,8,-24)).toBe(256);
})