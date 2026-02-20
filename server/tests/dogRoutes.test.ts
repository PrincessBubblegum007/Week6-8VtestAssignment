import { describe, it, expect, vi, beforeEach } from "vitest";
import express, { Express } from "express";
import request from "supertest";
import dogRoutes from "../routes/dogRoutes";
import * as dogService from "../services/dogService";

// Mock the dogService module
vi.mock("../services/dogService");

describe("dogRoutes", () => {
  let app: Express;

  // Setup Express app before each test
  beforeEach(() => {
    vi.clearAllMocks();
    app = express();
    app.use(express.json());
    app.use("/dogs", dogRoutes);
  });

  // TEST 5/5: Routes Test - GET /dogs/random Route Configuration
  it("Should have GET /dogs/random route that calls controller", async () => {
    // Arrange:  Mock service to return data
    const mockDogData = {
      imageUrl: "https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg",
      status: "success",
    };

    vi.spyOn(dogService, "getRandomDogImage").mockResolvedValueOnce(mockDogData);

    // Act: Send GET request to route
    const response = await request(app).get("/dogs/random");

    // Assert: Verify route response
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: mockDogData,
    });
    expect(dogService.getRandomDogImage).toHaveBeenCalledTimes(1);
  });
});
