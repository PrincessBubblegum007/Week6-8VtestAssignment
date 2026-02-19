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

  // ✅ TEST 5/5: Routes Test - GET /dogs/random 路由是否正确配置
  // ✅ TEST 5/5: Routes Test - GET /dogs/random Route Configuration
  // Worth: 2 points
  it("Should have GET /dogs/random route that calls controller", async () => {
    // Arrange: Mock service 返回数据 | Mock service to return data
    const mockDogData = {
      imageUrl: "https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg",
      status: "success",
    };

    vi.spyOn(dogService, "getRandomDogImage").mockResolvedValueOnce(mockDogData);

    // Act: 发送 GET 请求到路由 | Send GET request to route
    const response = await request(app).get("/dogs/random");

    // Assert: 验证路由响应 | Verify route response
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: mockDogData,
    });
    expect(dogService.getRandomDogImage).toHaveBeenCalledTimes(1);
  });
});
