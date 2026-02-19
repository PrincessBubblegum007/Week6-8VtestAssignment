import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRandomDogImage } from "../services/dogService";

// 模拟全局的 fetch 函数 | Mock global fetch function
global.fetch = vi.fn();

describe("dogService", () => {
  // 每个测试前重置 mock | Reset mock before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getRandomDogImage", () => {
    // ✅ TEST 1/5: Service Positive Test - 成功场景
    // ✅ TEST 1/5: Service Positive Test - Success Scenario
    // Worth: 2 points
    it("Should successfully return dog image data when API call succeeds", async () => {
      // Arrange: 准备模拟的 API 响应 | Prepare mock API response
      const mockResponse = {
        message: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      };

      // 模拟 fetch 返回成功响应 | Mock fetch to return success response
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      // Act: 执行函数 | Execute function
      const result = await getRandomDogImage();

      // Assert: 验证结果 | Verify result
      expect(result).toEqual({
        imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      });
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    // ❌ TEST 2/5: Service Negative Test - API 返回错误状态码
    // ❌ TEST 2/5: Service Negative Test - API Returns Error Status Code
    // Worth: 2 points
    it("Should throw error when API returns non-200 status code", async () => {
      // Arrange: 模拟失败的响应 | Mock failed response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      // Act & Assert: 期望函数抛出错误 | Expect function to throw error
      await expect(getRandomDogImage()).rejects.toThrow(
        "Dog API returned status 500"
      );
    });
  });
});