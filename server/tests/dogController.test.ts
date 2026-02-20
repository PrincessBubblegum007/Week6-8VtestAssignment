import { describe, it, expect, vi, beforeEach } from "vitest";
import { getDogImage } from "../controllers/dogController";
import * as dogService from "../services/dogService";

// Mock the entire dogService module
vi.mock("../services/dogService");

describe("dogController", () => {
  // Reset mocks before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getDogImage", () => {

    // TEST 3/5: Controller Positive Test - Successfully Returns Response

    it("Should return success response when service succeeds", async () => {
      // Arrange:  Prepare mock data and response object
      const mockDogData = {
        imageUrl: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
        status: "success",
      };

      // Mock the service to return success
      vi.spyOn(dogService, "getRandomDogImage").mockResolvedValueOnce(mockDogData);

      // Create mock Express request and response objects
      const mockRequest = {} as any;
      const mockResponse = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      } as any;

      // Act: Execute controller function
      await getDogImage(mockRequest, mockResponse);

      // Assert: Verify response
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        data: mockDogData,
      });
      expect(mockResponse.json).toHaveBeenCalledTimes(1);
      expect(dogService.getRandomDogImage).toHaveBeenCalledTimes(1);
    });

    // TEST 4/5: Controller Negative Test - Service 

    it("Should return error response when service throws error", async () => {
      // Arrange: Mock service  | Mock service to throw error
      const errorMessage = "Failed to fetch dog image";
      vi.spyOn(dogService, "getRandomDogImage").mockRejectedValueOnce(
        new Error(errorMessage)
      );

      // Create mock Express request and response objects
      const mockRequest = {} as any;
      const mockResponse = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
      } as any;

      // Act: Execute controller function
      await getDogImage(mockRequest, mockResponse);

      // Assert: Verify error response
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        error: errorMessage,
      });
      expect(dogService.getRandomDogImage).toHaveBeenCalledTimes(1);
    });
  });
});
