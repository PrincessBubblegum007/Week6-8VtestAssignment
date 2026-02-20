import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRandomDogImage } from "../services/dogService";

// Mock global fetch function
global.fetch = vi.fn();

describe("dogService", () => {
  //  Reset mock before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getRandomDogImage", () => {
    //  TEST 1/5: Service Positive Test - Success Scenario
    it("Should successfully return dog image data when API call succeeds", async () => {
      // Arrange:  Prepare mock API response
      const mockResponse = {
        message: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      };

      // Mock fetch to return success response
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      // Act:Execute function
      const result = await getRandomDogImage();

      // Assert: Verify result
      expect(result).toEqual({
        imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      });
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    //  TEST 2/5: Service Negative Test - API Returns Error Status Code
    it("Should throw error when API returns non-200 status code", async () => {
      // Arrange:  Mock failed response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      // Act & Assert: Expect function to throw error
      await expect(getRandomDogImage()).rejects.toThrow(
        "Dog API returned status 500"
      );
    });
  });
});