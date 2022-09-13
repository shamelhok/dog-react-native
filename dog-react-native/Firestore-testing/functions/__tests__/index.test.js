const test = require("firebase-functions-test")();
const {getAllBadges} = require("../index");
jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn()
}))
const mockQueryResponse = jest.fn()
mockQueryResponse.mockResolvedValue([
  {
    id: 1
  }
])

jest.mock("firebase-admin", () => ({
  initializeApp: jest.fn(),
  firestore: () => ({
    collection: jest.fn((path) => ({
      where: jest.fn((queryString) => ({
        get: mockQueryResponse,
      })),
    })),
  }),
}));

describe('onEpisodeTrackCreated', () => {
  it('successfully invokes function', async () => {
    const wrapped = test(getAllBadges);
    await wrapped({
      data: () => ({
      }),
      ref:{
        set: jest.fn()
      }
    })
  })
})