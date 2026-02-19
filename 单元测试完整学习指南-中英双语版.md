# 🎓 Dog API 单元测试完整学习指南

# 🎓 Complete Unit Testing Guide for Dog API

> 专为信息技术专业初学者编写 | 从零开始学习单元测试
>
> Written for IT Beginners | Learn Unit Testing from Scratch

---

## 📑 目录 | Table of Contents

1. [环境准备 | Environment Setup](#第一部分环境准备)
2. [获取项目 | Get the Project](#第二部分获取项目代码)
3. [安装依赖 | Install Dependencies](#第三部分安装项目依赖)
4. [理解项目结构 | Understand Project Structure](#第四部分理解项目结构)
5. [理解核心代码 | Understand Core Code](#第五部分理解核心代码)
6. [理解测试框架 | Understand Testing Framework](#第六部分理解测试框架)
7. [编写单元测试 | Write Unit Tests](#第七部分编写单元测试)
8. [运行测试 | Run Tests](#第八部分运行测试最关键)
9. [测试最佳实践 | Testing Best Practices](#第九部分测试最佳实践)
10. [常见问题 | Common Issues](#第十部分常见问题和解决方案)

---

## 第一部分:环境准备

## Part 1: Environment Setup

### 步骤 1:安装必要的开发工具

### Step 1: Install Necessary Development Tools

#### 操作场所 | Where to Operate

**你的电脑(任意位置)**

**Your Computer (Any Location)**

#### 操作方式 | How to Operate

**1. 安装 Node.js | Install Node.js**

- 访问 | Visit:[https://nodejs.org/](https://nodejs.org/)
- 下载并安装 LTS 版本(推荐 v18 或更高版本)
- Download and install LTS version (v18 or higher recommended)
- 安装完成后,打开命令行/终端,验证安装
- After installation, open command line/terminal to verify:
  ```bash
  node --version
  npm --version
  ```
- 如果显示版本号(如 v18.17.0),说明安装成功 ✅
- If version number appears (e.g., v18.17.0), installation successful ✅

**2. 安装 Git | Install Git**

- 访问 | Visit:[https://git-scm.com/](https://git-scm.com/)
- 下载并安装 | Download and install
- 验证安装 | Verify installation:
  ```bash
  git --version
  ```

**3. 安装代码编辑器 | Install Code Editor**

- 推荐使用 Visual Studio Code | Recommended: Visual Studio Code:[https://code.visualstudio.com/](https://code.visualstudio.com/)
- 下载并安装 | Download and install

#### 执行目的 | Purpose

| 工具 Tool | 用途 Purpose                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------- |
| Node.js   | 运行 JavaScript/TypeScript 代码的环境 <br> Runtime environment for JavaScript/TypeScript code      |
| npm       | 管理项目依赖包(随 Node.js 自动安装) <br> Manage project dependencies (auto-installed with Node.js) |
| Git       | 下载项目代码 <br> Download project code                                                            |
| VS Code   | 编写和管理代码 <br> Write and manage code                                                          |

#### 为什么需要这些工具 | Why These Tools Are Needed

- **Node.js**: 提供服务器运行环境,让你能运行测试
  - Provides server runtime environment to run tests
- **npm**: 用于安装测试框架(Vitest)和其他依赖包
  - Used to install testing framework (Vitest) and other dependencies
- **Git**: 从 GitHub 下载项目代码
  - Download project code from GitHub
- **VS Code**: 提供良好的代码编写体验,支持语法高亮和智能提示
  - Provides good coding experience with syntax highlighting and IntelliSense

---

## 第二部分:获取项目代码

## Part 2: Get the Project Code

### 步骤 2:克隆项目仓库

### Step 2: Clone the Project Repository

#### 操作场所 | Where to Operate

**你希望存放项目的文件夹**(例如:`E:\Github\`)

**The folder where you want to store the project** (e.g., `E:\Github\`)

#### 操作方式 | How to Operate

**选项A: 使用命令行(推荐) | Option A: Use Command Line (Recommended)**

1. 打开命令行/终端(Windows: 按 `Win + R`,输入 `cmd`)
   - Open command line/terminal (Windows: Press `Win + R`, type `cmd`)
2. 导航到工作目录 | Navigate to working directory:
   ```bash
   cd E:\Github\
   ```
3. 克隆项目 | Clone the project:
   ```bash
   git clone https://github.com/OAMK-software-testing/dog-starter-template.git
   ```
4. 进入项目目录 | Enter project directory:
   ```bash
   cd dog-starter-template
   ```

**选项B: 使用 VS Code | Option B: Use VS Code**

1. 打开 VS Code | Open VS Code
2. 按 `Ctrl + Shift + P` 打开命令面板
   - Press `Ctrl + Shift + P` to open command palette
3. 输入 `Git: Clone` | Type `Git: Clone`
4. 粘贴仓库地址 | Paste repository URL:`https://github.com/OAMK-software-testing/dog-starter-template.git`
5. 选择保存位置 | Select save location

#### 执行目的 | Purpose

将项目代码从 GitHub 下载到本地,这样你就可以:

- 查看和编辑代码
- 运行项目
- 编写和运行测试

Download the project code from GitHub to local, so you can:

- View and edit code
- Run the project
- Write and run tests

#### 为什么使用 Git Clone | Why Use Git Clone

`git clone` 会复制整个项目仓库,包括所有文件、文件夹和版本历史,这是标准的项目获取方式。

`git clone` copies the entire project repository, including all files, folders, and version history, which is the standard way to obtain a project.

---

## 第三部分:安装项目依赖

## Part 3: Install Project Dependencies

### 步骤 3:安装后端依赖

### Step 3: Install Backend Dependencies

#### 操作场所 | Where to Operate

**项目的 server 文件夹**(`E:\Github\dog-starter-template\server\`)

**Project's server folder** (`E:\Github\dog-starter-template\server\`)

#### 操作方式 | How to Operate

1. 打开终端(在 VS Code 中按 `` Ctrl + ` ``)
   - Open terminal (press `` Ctrl + ` `` in VS Code)
2. 进入 server 目录 | Enter server directory:
   ```bash
   cd server
   ```
3. 安装依赖 | Install dependencies:
   ```bash
   npm install
   ```
4. 等待安装完成(可能需要1-3分钟)
   - Wait for installation to complete (may take 1-3 minutes)

#### 会安装什么? | What Will Be Installed?

根据 `package.json` 文件,会安装:

According to `package.json` file, the following will be installed:

**生产依赖 | Production Dependencies:**

- `express`: Web 服务器框架 | Web server framework
- `cors`: 跨域资源共享 | Cross-Origin Resource Sharing
- `dotenv`: 环境变量管理 | Environment variable management

**开发依赖 | Development Dependencies:**

- `vitest`: 测试框架(最重要!) | Testing framework (most important!)
- `typescript`: TypeScript 编译器 | TypeScript compiler
- `tsx`: TypeScript 执行器 | TypeScript executor
- `@types/*`: TypeScript 类型定义 | TypeScript type definitions

#### 执行目的 | Purpose

安装所有必要的 npm 包到 `node_modules` 文件夹,让项目能够运行和测试。

Install all necessary npm packages to `node_modules` folder so the project can run and be tested.

#### 如何确认安装成功? | How to Confirm Successful Installation?

- 你会看到一个新的 `node_modules` 文件夹
  - You'll see a new `node_modules` folder
- 终端显示类似:`added 267 packages in 45s`
  - Terminal shows something like: `added 267 packages in 45s`
- 没有红色的 ERROR 信息
  - No red ERROR messages

---

### 步骤 4:安装前端依赖(可选)

### Step 4: Install Frontend Dependencies (Optional)

#### 操作场所 | Where to Operate

**项目根目录**(`E:\Github\dog-starter-template\`)

**Project root directory** (`E:\Github\dog-starter-template\`)

#### 操作方式 | How to Operate

1. 返回项目根目录 | Return to project root:
   ```bash
   cd ..
   ```
2. 安装依赖 | Install dependencies:
   ```bash
   npm install
   ```

#### 说明 | Note

这一步是安装前端(React)的依赖。如果你只关注后端测试,可以跳过这一步。

This step installs frontend (React) dependencies. If you only focus on backend testing, you can skip this step.

---

## 第四部分:理解项目结构

## Part 4: Understand Project Structure

### 步骤 5:项目文件结构

### Step 5: Project File Structure

#### 操作场所 | Where to Operate

**使用 VS Code 打开项目文件夹**

**Open project folder using VS Code**

#### 项目结构说明 | Project Structure Explanation

```
dog-starter-template/
├── server/                          # 后端代码(我们要测试的部分) | Backend code (what we'll test)
│   ├── services/
│   │   └── dogService.ts           # 服务层:调用外部 Dog API | Service layer: calls external Dog API
│   ├── controllers/
│   │   └── dogController.ts        # 控制器层:处理 HTTP 请求 | Controller layer: handles HTTP requests
│   ├── routes/
│   │   └── dogRoutes.ts            # 路由层:定义 API 端点 | Route layer: defines API endpoints
│   ├── tests/                       # 测试文件夹 ⭐ | Test folder ⭐
│   │   ├── dogService.test.ts      # 服务层测试(我们要写的) | Service layer tests (what we'll write)
│   │   ├── dogController.test.ts   # 控制器层测试 | Controller layer tests
│   │   ├── dogRoutes.test.ts       # 路由层测试 | Route layer tests
│   │   └── dogApi.test.ts          # API 集成测试 | API integration tests
│   ├── package.json                 # 后端依赖配置 | Backend dependency config
│   ├── vitest.config.ts            # Vitest 测试配置 | Vitest test configuration
│   └── index.ts                    # 主服务器文件 | Main server file
├── src/                             # 前端代码(React) | Frontend code (React)
├── package.json                     # 前端依赖配置 | Frontend dependency config
└── README.md                        # 项目说明文档 | Project documentation
```

#### 理解分层架构 | Understanding Layered Architecture

项目使用**服务层模式**(Service Layer Pattern):

The project uses the **Service Layer Pattern**:

```
HTTP 请求 → Routes(路由) → Controller(控制器) → Service(服务) → 外部 API
HTTP Request → Routes → Controller → Service → External API
                                                       ↓
HTTP 响应 ← Routes       ← Controller       ← Service ← 数据返回
HTTP Response ← Routes ← Controller ← Service ← Data returned
```

**每一层的职责 | Responsibilities of Each Layer:**

| 层级 Layer | 文件 File        | 职责 Responsibility                                   | 类比 Analogy                  |
| ---------- | ---------------- | ----------------------------------------------------- | ----------------------------- |
| Routes     | dogRoutes.ts     | 定义 URL 路径 <br> Define URL paths                   | 餐厅菜单 <br> Restaurant menu |
| Controller | dogController.ts | 处理请求和响应 <br> Handle requests and responses     | 服务员 <br> Waiter            |
| Service    | dogService.ts    | 业务逻辑和 API 调用 <br> Business logic and API calls | 厨师 <br> Chef                |

#### 为什么要分层? | Why Use Layers?

- **职责分离**: 每一层做好自己的事
  - **Separation of Concerns**: Each layer does its own job
- **易于测试**: 可以单独测试每一层
  - **Easy to Test**: Can test each layer independently
- **易于维护**: 修改一层不影响其他层
  - **Easy to Maintain**: Modifying one layer doesn't affect others
- **专业标准**: 这是行业最佳实践
  - **Professional Standard**: This is industry best practice

---

## 第五部分:理解核心代码

## Part 5: Understand Core Code

### 步骤 6:阅读 dogService.ts(服务层)

### Step 6: Read dogService.ts (Service Layer)

#### 操作场所 | Where to Operate

**文件路径 | File Path:**`server/services/dogService.ts`

#### 完整代码 | Complete Code

```typescript
interface DogImageResponse {
  imageUrl: string; // 狗狗图片的 URL | Dog image URL
  status: string; // 请求状态 | Request status
}

// Dog API 的地址(从环境变量读取,如果没有则使用默认值)
// Dog API address (read from environment variable, or use default)
const DOG_API_URL =
  process.env.DOG_API_URL || "https://dog.ceo/api/breeds/image/random";

/**
 * 从 Dog API 获取随机狗狗图片
 * Get random dog image from Dog API
 * @returns {Promise<DogImageResponse>} 返回包含图片信息的 Promise | Returns Promise containing image info
 * @throws {Error} 如果 API 请求失败则抛出错误 | Throws error if API request fails
 */
export async function getRandomDogImage(): Promise<DogImageResponse> {
  try {
    // 1. 调用外部 API | Call external API
    const response = await fetch(DOG_API_URL);

    // 2. 检查响应状态 | Check response status
    if (!response.ok) {
      throw new Error(`Dog API returned status ${response.status}`);
    }

    // 3. 解析 JSON 响应 | Parse JSON response
    const data = (await response.json()) as { message: string; status: string };

    // 4. 检查 API 返回的状态 | Check API returned status
    if (data.status !== "success") {
      throw new Error("Failed to fetch dog image from API");
    }

    // 5. 返回格式化的数据 | Return formatted data
    return {
      imageUrl: data.message,
      status: "success",
    };
  } catch (error) {
    // 6. 错误处理 | Error handling
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to fetch dog image: ${errorMessage}`);
  }
}
```

#### 代码逐行解释 | Line-by-Line Code Explanation

**第1步:调用外部 API | Step 1: Call External API**

```typescript
const response = await fetch(DOG_API_URL);
```

- 使用 `fetch` 函数向 Dog CEO API 发送 HTTP GET 请求
  - Use `fetch` function to send HTTP GET request to Dog CEO API
- `await` 等待响应返回
  - `await` waits for response to return
- 就像打电话到外卖店订餐
  - Like calling a takeout restaurant to order food

**第2步:检查响应状态 | Step 2: Check Response Status**

```typescript
if (!response.ok) {
  throw new Error(`Dog API returned status ${response.status}`);
}
```

- `response.ok` 检查 HTTP 状态码是否为 200-299(成功)
  - `response.ok` checks if HTTP status code is 200-299 (success)
- 如果不是,抛出错误,包含具体的状态码
  - If not, throw error with specific status code
- 就像检查外卖店是否接单
  - Like checking if the restaurant accepted your order

**第3步:解析 JSON 响应 | Step 3: Parse JSON Response**

```typescript
const data = (await response.json()) as { message: string; status: string };
```

- 将响应体解析为 JSON 对象
  - Parse response body as JSON object
- Dog API 返回格式:`{"message": "图片URL", "status": "success"}`
  - Dog API returns format: `{"message": "Image URL", "status": "success"}`

**第4步:检查业务状态 | Step 4: Check Business Status**

```typescript
if (data.status !== "success") {
  throw new Error("Failed to fetch dog image from API");
}
```

- 即使 HTTP 请求成功,也要检查业务层面的状态
  - Even if HTTP request succeeds, check business-level status
- API 可能返回:`{"status": "error", "message": "数据库错误"}`
  - API might return: `{"status": "error", "message": "Database error"}`

**第5步:返回格式化数据 | Step 5: Return Formatted Data**

```typescript
return {
  imageUrl: data.message,
  status: "success",
};
```

- 将 API 的 `message` 字段重命名为 `imageUrl`
  - Rename API's `message` field to `imageUrl`
- 保持统一的返回格式
  - Maintain consistent return format

**第6步:错误处理 | Step 6: Error Handling**

```typescript
const errorMessage =
  error instanceof Error ? error.message : "Unknown error occurred";
throw new Error(`Failed to fetch dog image: ${errorMessage}`);
```

- 捕获所有错误(网络错误、超时等)
  - Catch all errors (network errors, timeouts, etc.)
- 重新抛出一个更友好的错误消息
  - Re-throw a more friendly error message

#### 执行目的 | Purpose

理解这个函数的作用:

Understand what this function does:

- **职责 | Responsibility**: 与外部 Dog API 通信 | Communicate with external Dog API
- **输入 | Input**: 无参数 | No parameters
- **输出 | Output**: 包含图片 URL 的对象 | Object containing image URL
- **错误处理 | Error Handling**: 各种错误情况都要处理 | Handle various error scenarios

#### 为什么要详细理解代码? | Why Understand Code in Detail?

只有理解了代码的工作原理,才能编写有效的测试来验证它的行为。

Only by understanding how the code works can you write effective tests to verify its behavior.

---

### 步骤 7:阅读 dogController.ts(控制器层)

### Step 7: Read dogController.ts (Controller Layer)

#### 操作场所 | Where to Operate

**文件路径 | File Path:**`server/controllers/dogController.ts`

#### 完整代码 | Complete Code

```typescript
import { Request, Response } from "express";
import { getRandomDogImage } from "../services/dogService";

/**
 * 控制器:处理获取随机狗狗图片的请求
 * Controller: Handle requests to get random dog images
 * @param _req - Express 请求对象(这里不需要使用,所以用 _ 前缀)
 *              - Express request object (not used here, so prefixed with _)
 * @param res - Express 响应对象 | Express response object
 */
export async function getDogImage(_req: Request, res: Response): Promise<void> {
  try {
    // 1. 调用服务层获取数据 | Call service layer to get data
    const dogData = await getRandomDogImage();

    // 2. 返回成功响应 | Return success response
    res.json({
      success: true,
      data: dogData,
    });
  } catch (error) {
    // 3. 错误处理:返回 500 错误 | Error handling: return 500 error
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";

    res.status(500).json({
      success: false,
      error: message,
    });
  }
}
```

#### 代码解释 | Code Explanation

**控制器的职责 | Controller's Responsibilities:**

1. 接收 HTTP 请求(`Request`) | Receive HTTP request (`Request`)
2. 调用服务层处理业务逻辑 | Call service layer to handle business logic
3. 返回 HTTP 响应(`Response`) | Return HTTP response (`Response`)

**为什么 `_req` 有下划线? | Why Does `_req` Have Underscore?**

- 表示这个参数没有被使用
  - Indicates this parameter is not used
- 但 Express 要求控制器函数有这个参数
  - But Express requires controller functions to have this parameter
- 下划线前缀是约定俗成的"未使用参数"标记
  - Underscore prefix is conventional marker for "unused parameter"

**成功响应格式 | Success Response Format:**

```json
{
  "success": true,
  "data": {
    "imageUrl": "https://...",
    "status": "success"
  }
}
```

**错误响应格式 | Error Response Format:**

```json
{
  "success": false,
  "error": "错误消息 | Error message"
}
```

#### 为什么控制器不直接调用外部 API? | Why Doesn't Controller Call External API Directly?

这是**关注点分离**原则:

This is the **Separation of Concerns** principle:

- Controller 只负责 HTTP 层面的事情(请求/响应)
  - Controller only handles HTTP-level matters (requests/responses)
- Service 负责业务逻辑和外部调用
  - Service handles business logic and external calls
- 这样便于单独测试每一层
  - This makes it easier to test each layer independently

---

### 步骤 8:阅读 dogRoutes.ts(路由层)

### Step 8: Read dogRoutes.ts (Route Layer)

#### 操作场所 | Where to Operate

**文件路径 | File Path:**`server/routes/dogRoutes.ts`

#### 完整代码 | Complete Code

```typescript
import { Router } from "express";
import { getDogImage } from "../controllers/dogController";

// 创建路由器实例 | Create router instance
const router = Router();

/**
 * 定义路由:GET /dogs/random
 * Define route: GET /dogs/random
 * 当用户访问这个 URL 时,调用 getDogImage 控制器
 * When user accesses this URL, call getDogImage controller
 */
router.get("/random", getDogImage);

// 导出路由器,供主应用使用 | Export router for main app to use
export default router;
```

#### 代码解释 | Code Explanation

**路由的作用 | Route's Purpose:**

- 将 URL 路径映射到控制器函数
  - Map URL paths to controller functions
- 定义 HTTP 方法(GET、POST 等)
  - Define HTTP methods (GET, POST, etc.)

**这行代码的意思 | What This Line Means:**

```typescript
router.get("/random", getDogImage);
```

- 当收到 GET 请求到 `/dogs/random` 路径时
  - When a GET request is received to `/dogs/random` path
- 调用 `getDogImage` 控制器函数
  - Call `getDogImage` controller function

**完整的 URL | Complete URL:**

```
http://localhost:5000/api/dogs/random
                         ↑    ↑
                    路由前缀  这里定义的路径
                    Route prefix  Path defined here
```

---

## 第六部分:理解测试框架

## Part 6: Understand Testing Framework

### 步骤 9:了解 Vitest

### Step 9: Learn About Vitest

#### 什么是 Vitest? | What is Vitest?

**Vitest** 是一个现代的 JavaScript/TypeScript 测试框架,专门用于编写和运行单元测试。

**Vitest** is a modern JavaScript/TypeScript testing framework specifically for writing and running unit tests.

#### 为什么选择 Vitest? | Why Choose Vitest?

| 优点 Advantage                      | 说明 Description                                                                        |
| ----------------------------------- | --------------------------------------------------------------------------------------- |
| 速度快 Fast                         | 使用 Vite 构建,启动和运行都很快 <br> Uses Vite build, fast startup and execution        |
| TypeScript 友好 TypeScript-friendly | 原生支持 TypeScript,无需额外配置 <br> Native TypeScript support, no extra config needed |
| 语法简单 Simple syntax              | 类似 Jest,容易学习 <br> Similar to Jest, easy to learn                                  |
| 功能强大 Powerful                   | 支持 mock、spy、coverage 等 <br> Supports mock, spy, coverage, etc.                     |

#### 基本测试语法 | Basic Test Syntax

```typescript
import { describe, it, expect } from "vitest";

// describe:描述一组相关的测试 | describe: describe a group of related tests
describe("测试组名称 | Test suite name", () => {
  // it:定义一个具体的测试用例 | it: define a specific test case
  it("测试用例描述 | Test case description", () => {
    // Arrange(准备):设置测试数据 | Arrange: set up test data
    const input = 2 + 2;

    // Act(执行):执行要测试的代码 | Act: execute code to test
    const result = input;

    // Assert(断言):验证结果是否符合预期 | Assert: verify result meets expectations
    expect(result).toBe(4);
  });
});
```

#### 核心概念 | Core Concepts

**1. describe()**

- 创建一个测试组(Test Suite)
  - Create a test suite
- 可以嵌套使用
  - Can be nested
- 用于组织相关的测试
  - Used to organize related tests

**2. it() 或 test() | it() or test()**

- 定义一个测试用例(Test Case)
  - Define a test case
- 描述应该清晰说明测试什么
  - Description should clearly state what is being tested

**3. expect()**

- 断言函数,验证结果
  - Assertion function to verify results
- 常用的断言 | Common assertions:
  - `expect(value).toBe(expected)` - 严格相等 | Strict equality
  - `expect(value).toEqual(expected)` - 深度相等(对象、数组) | Deep equality (objects, arrays)
  - `expect(fn).toThrow()` - 期望抛出错误 | Expect to throw error
  - `expect(fn).toHaveBeenCalled()` - 期望被调用 | Expect to be called

**4. vi()**

- Vitest 的模拟工具 | Vitest's mocking utility
- `vi.fn()` - 创建模拟函数 | Create mock function
- `vi.mock()` - 模拟整个模块 | Mock entire module
- `vi.spyOn()` - 监听函数调用 | Spy on function calls

#### AAA 模式(最佳实践) | AAA Pattern (Best Practice)

所有测试都应遵循 AAA 模式:

All tests should follow the AAA pattern:

```typescript
it("测试描述 | Test description", () => {
  // 1. Arrange(准备):设置测试数据和环境
  //    Arrange: set up test data and environment
  const input = "test data";
  const expected = "expected result";

  // 2. Act(执行):执行被测试的代码
  //    Act: execute the code being tested
  const result = myFunction(input);

  // 3. Assert(断言):验证结果
  //    Assert: verify the result
  expect(result).toBe(expected);
});
```

---

### 步骤 10:理解测试配置

### Step 10: Understand Test Configuration

#### 操作场所 | Where to Operate

**文件路径 | File Path:**`server/vitest.config.ts`

#### 完整代码 | Complete Code

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node", // 使用 Node.js 环境(因为是后端测试)
    // Use Node.js environment (backend testing)
    globals: true, // 允许全局使用测试函数(不需要每次 import)
    // Allow global use of test functions (no need to import each time)
    coverage: {
      // 代码覆盖率配置 | Code coverage configuration
      provider: "v8",
      reporter: ["text", "json", "html"], // 生成多种格式的覆盖率报告
      // Generate coverage reports in multiple formats
    },
  },
});
```

#### 配置说明 | Configuration Explanation

| 配置项 Config     | 值 Value                 | 说明 Description                                                                                         |
| ----------------- | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| environment       | 'node'                   | 测试运行在 Node.js 环境(不是浏览器) <br> Tests run in Node.js environment (not browser)                  |
| globals           | true                     | 可以直接使用 `describe`、`it` 等,无需 import <br> Can use `describe`, `it`, etc. directly without import |
| coverage.provider | 'v8'                     | 使用 V8 引擎的代码覆盖率工具 <br> Use V8 engine's code coverage tool                                     |
| coverage.reporter | ['text', 'json', 'html'] | 生成文本、JSON 和 HTML 格式的报告 <br> Generate text, JSON, and HTML format reports                      |

#### 执行目的 | Purpose

配置测试环境,确保测试能正确运行并生成覆盖率报告。

Configure testing environment to ensure tests run correctly and generate coverage reports.

---

## 第七部分:编写单元测试

## Part 7: Write Unit Tests

### 步骤 11:编写 dogService 测试(最重要!)

### Step 11: Write dogService Tests (Most Important!)

#### 操作场所 | Where to Operate

**文件路径 | File Path:**`server/tests/dogService.test.ts`

#### ⚠️ 核心概念解释(先理解再写代码)

#### ⚠️ Core Concept Explanation (Understand Before Writing Code)

##### 什么是测试用例? | What is a Test Case?

**测试用例 = 一个具体的测试场景**

**Test Case = A Specific Test Scenario**

想象你在测试一个计算器:

Imagine you're testing a calculator:

- 测试用例1: 输入 `2 + 2`,看是否等于 `4` ✅ (正常情况)
  - Test case 1: Input `2 + 2`, check if equals `4` ✅ (normal case)
- 测试用例2: 输入 `1 ÷ 0`,看是否报错 ❌ (异常情况)
  - Test case 2: Input `1 ÷ 0`, check if error occurs ❌ (exceptional case)
- 测试用例3: 输入超大数字,看会不会崩溃 ❌ (边界情况)
  - Test case 3: Input very large number, check if crashes ❌ (boundary case)

每一个测试用例就是一个 `it("描述", ...)` 代码块。

Each test case is an `it("description", ...)` code block.

##### Positive Test vs Negative Test

**Positive Test(正面测试) | Positive Test:**

- 测试在一切正常的情况下,函数能正确工作
  - Test that function works correctly when everything is normal
- 就像测试一辆车在正常路况下能不能开
  - Like testing if a car can drive under normal road conditions
- 对应文档要求:**Test 1: Create positive test**
  - Corresponds to document requirement: **Test 1: Create positive test**

**Negative Test(负面测试) | Negative Test:**

- 测试在出错的情况下,函数能不能正确处理错误
  - Test that function can handle errors correctly when things go wrong
- 就像测试一辆车在刹车失灵、轮胎爆胎时会怎么样
  - Like testing what happens to a car when brakes fail or tire blows out
- 对应文档要求:**Test 2: Create negative tests**
  - Corresponds to document requirement: **Test 2: Create negative tests**

##### 什么是 Mock? | What is Mock?

**Mock = 假的、模拟的 | Mock = Fake, Simulated**

```
真实 fetch:  真的去调用 dog.ceo → 需要网络 → 慢 → 可能失败
Real fetch:  Actually call dog.ceo → Needs network → Slow → May fail

Mock fetch:  假装调用,返回我们指定的数据 → 不需要网络 → 快 → 可控
Mock fetch:  Pretend to call, return data we specify → No network needed → Fast → Controllable
```

**真实世界类比 | Real-World Analogy:**

- 演习(mock): 假装发生火灾,测试逃生流程 ✅ 安全、可控
  - Drill (mock): Pretend fire occurs, test evacuation ✅ Safe, controllable
- 真实(real): 等真的火灾发生再测试 ❌ 危险、不可控
  - Real: Wait for real fire to test ❌ Dangerous, uncontrollable

**为什么要用 Mock? | Why Use Mock?**

1. 测试不应该依赖外部服务(可能失败、变慢)
   - Tests shouldn't depend on external services (may fail, become slow)
2. 可以模拟各种场景(成功、失败、超时等)
   - Can simulate various scenarios (success, failure, timeout, etc.)
3. 测试速度快,结果可预测
   - Tests are fast, results predictable
4. 不消耗外部资源(不会向 Dog API 发送真实请求)
   - Don't consume external resources (won't send real requests to Dog API)

##### 什么是状态码? | What are Status Codes?

**HTTP 状态码 = 服务器告诉你请求结果的数字代码**

**HTTP Status Code = Numeric code server uses to tell you request result**

常见状态码 | Common status codes:

- **200**: 成功 ✅ (OK)
- **201**: 创建成功 ✅ (Created)
- **400**: 请求错误 ❌ (Bad Request)
- **404**: 页面不存在 ❌ (Not Found)
- **500**: 服务器内部错误 ❌ (Internal Server Error)
- **503**: 服务器崩溃 ❌ (Service Unavailable)

---

#### 操作方式 | How to Operate

**第1步:打开测试文件 | Step 1: Open Test File**

在 VS Code 中找到并打开:`server/tests/dogService.test.ts`

In VS Code, find and open: `server/tests/dogService.test.ts`

你会发现这个文件目前是空的或者已经有代码了。

You'll find this file is currently empty or already has code.

**第2步:复制完整测试代码 | Step 2: Copy Complete Test Code**

将以下代码复制并粘贴到文件中:

Copy and paste the following code into the file:

```typescript
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
    // ✅ 测试用例 1: Positive Test - 成功场景
    // ✅ Test Case 1: Positive Test - Success Scenario
    it("应该成功返回狗狗图片数据 | Should successfully return dog image data", async () => {
      // Arrange:准备模拟的 API 响应 | Arrange: Prepare mock API response
      const mockResponse = {
        message:
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      };

      // 模拟 fetch 返回成功响应 | Mock fetch to return success response
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      // Act:执行函数 | Act: Execute function
      const result = await getRandomDogImage();

      // Assert:验证结果 | Assert: Verify result
      expect(result).toEqual({
        imageUrl:
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      });
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    // ❌ 测试用例 2: Negative Test - API 返回错误状态码
    // ❌ Test Case 2: Negative Test - API Returns Error Status Code
    it("当 API 返回非 200 状态码时应该抛出错误 | Should throw error when API returns non-200 status", async () => {
      // Arrange:模拟失败的响应 | Arrange: Mock failed response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      // Act & Assert:期望函数抛出错误 | Act & Assert: Expect function to throw error
      await expect(getRandomDogImage()).rejects.toThrow(
        "Dog API returned status 500",
      );
    });

    // ❌ 测试用例 3: Negative Test - API 返回错误状态
    // ❌ Test Case 3: Negative Test - API Returns Error Status
    it("当 API 返回的 status 不是 success 时应该抛出错误 | Should throw error when API returns non-success status", async () => {
      // Arrange
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: "", status: "error" }),
      });

      // Act & Assert
      await expect(getRandomDogImage()).rejects.toThrow(
        "Failed to fetch dog image from API",
      );
    });

    // ❌ 测试用例 4: Negative Test - 网络错误
    // ❌ Test Case 4: Negative Test - Network Error
    it("当网络请求失败时应该抛出错误 | Should throw error when network request fails", async () => {
      // Arrange:模拟网络错误 | Arrange: Mock network error
      (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

      // Act & Assert
      await expect(getRandomDogImage()).rejects.toThrow(
        "Failed to fetch dog image: Network error",
      );
    });
  });
});
```

**第3步:保存文件 | Step 3: Save File**

按 `Ctrl + S` (Windows) 或 `Cmd + S` (Mac)

Press `Ctrl + S` (Windows) or `Cmd + S` (Mac)

---

#### 🔍 详细代码解释(逐行讲解)

#### 🔍 Detailed Code Explanation (Line by Line)

##### 第1部分:导入和设置 | Part 1: Import and Setup

```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";
import { getRandomDogImage } from "../services/dogService";

// 模拟全局的 fetch 函数 | Mock global fetch function
global.fetch = vi.fn();
```

**含义 | Meaning:**

- `describe, it, expect`: Vitest 提供的测试函数
  - Vitest's testing functions
- `vi`: Vitest 的模拟(mock)工具
  - Vitest's mocking utility
- `beforeEach`: 在每个测试前执行的钩子函数
  - Hook function executed before each test
- `global.fetch = vi.fn()`: **关键!** 用假的 fetch 替换真实的 fetch 函数
  - **Critical!** Replace real fetch with fake fetch function

**为什么 `global.fetch = vi.fn()`? | Why `global.fetch = vi.fn()`?**

- `getRandomDogImage()` 内部会调用 `fetch()`
  - `getRandomDogImage()` internally calls `fetch()`
- 测试时我们不想真的去调用 Dog API 网站
  - During testing we don't want to actually call Dog API website
- 所以用假的 fetch 替换,这样我们可以控制它的行为
  - So we replace with fake fetch so we can control its behavior

---

##### 第2部分:测试组设置 | Part 2: Test Suite Setup

```typescript
describe("dogService", () => {
  beforeEach(() => {
    vi.clearAllMocks();  // 清空之前所有的模拟记录 | Clear all previous mock records
  });
```

**含义 | Meaning:**

- `describe("dogService", ...)`: 创建一个测试组,名字叫 "dogService"
  - Create a test suite named "dogService"
- `beforeEach(...)`: 在每个测试用例运行前,清空 mock 的调用记录
  - Before each test case runs, clear mock call records
- 这样每个测试都是全新开始,互不影响
  - This way each test starts fresh, no interference

**为什么需要 `beforeEach`? | Why Need `beforeEach`?**

- 测试1可能调用了 fetch 1次
  - Test 1 might have called fetch 1 time
- 测试2之前要清空记录,否则会看到2次调用
  - Before test 2, need to clear records, otherwise will see 2 calls
- 保证测试独立性
  - Ensure test independence

---

##### ✅ 测试用例 1:正面测试(Positive Test) - 成功场景

##### ✅ Test Case 1: Positive Test - Success Scenario

```typescript
it("应该成功返回狗狗图片数据 | Should successfully return dog image data", async () => {
```

**这是什么? | What is this?**

- 这是一个**正面测试**(Positive Test),也叫"快乐路径"(Happy Path)
  - This is a **Positive Test**, also called "Happy Path"
- 测试在一切正常的情况下,函数是否能正确工作
  - Test if function works correctly when everything is normal
- **对应文档要求:Test 1: Create positive test**
  - **Corresponds to document requirement: Test 1: Create positive test**

**真实世界类比 | Real-World Analogy:**

- 你去餐厅点餐,服务员正常上菜 ✅
  - You go to restaurant to order, waiter serves normally ✅
- 你去 ATM 取钱,机器正常吐钱 ✅
  - You go to ATM to withdraw, machine dispenses normally ✅
- 你打电话,对方正常接听 ✅
  - You make phone call, other party answers normally ✅

**步骤1: Arrange(准备阶段) | Step 1: Arrange**

```typescript
const mockResponse = {
  message: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  status: "success",
};
```

- 创建一个假的响应对象
  - Create a fake response object
- 就像 Dog API 真的返回了这些数据一样
  - As if Dog API actually returned this data
- 这是我们期望的正常响应
  - This is the normal response we expect

**步骤2: 继续准备 - 告诉假 fetch 怎么表现 | Step 2: Continue Setup - Tell Fake fetch How to Behave**

```typescript
(global.fetch as any).mockResolvedValueOnce({
  ok: true, // 表示 HTTP 请求成功(状态码 200) | Indicates HTTP request success (status 200)
  json: async () => mockResponse, // 当调用 .json() 时返回我们准备的数据 | Return our prepared data when .json() is called
});
```

- `mockResolvedValueOnce`: 下一次调用 fetch 时,返回这个假数据
  - `mockResolvedValueOnce`: Next time fetch is called, return this fake data
- `ok: true`: 模拟 HTTP 200 成功状态
  - `ok: true`: Mock HTTP 200 success status
- `json: async () => mockResponse`: 模拟 `response.json()` 方法
  - `json: async () => mockResponse`: Mock `response.json()` method

**为什么 `mockResolvedValueOnce`? | Why `mockResolvedValueOnce`?**

- `Resolved` = Promise 成功(不是 Rejected)
  - `Resolved` = Promise succeeded (not Rejected)
- `Once` = 只对下一次调用有效
  - `Once` = Only valid for next call
- 模拟 `fetch()` 返回一个成功的 Promise
  - Mock `fetch()` returning a successful Promise

**步骤3: Act(执行阶段) | Step 3: Act**

```typescript
const result = await getRandomDogImage();
```

- 调用我们要测试的函数
  - Call the function we want to test
- 这时函数内部会调用 fetch,但实际上调用的是我们的假 fetch
  - At this point function internally calls fetch, but actually calls our fake fetch
- await 等待异步操作完成
  - await waits for async operation to complete

**步骤4: Assert(断言阶段) | Step 4: Assert**

```typescript
expect(result).toEqual({
  imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  status: "success",
});
expect(global.fetch).toHaveBeenCalledTimes(1);
```

- 第一个断言:验证返回的结果是否正确
  - First assertion: Verify returned result is correct
- 第二个断言:验证 fetch 是否只被调用了一次
  - Second assertion: Verify fetch was called only once
- 如果两个断言都通过,测试就通过了 ✅
  - If both assertions pass, test passes ✅

**你创造了什么? | What Did You Create?**

- 你刚才写的这个 `it()` 块就是**创造了一个测试用例**!
  - This `it()` block you just wrote **created a test case**!
- 这就是"Create positive test"的具体实现
  - This is the concrete implementation of "Create positive test"
- 测试不是运行出来的,是**写代码创造出来的**
  - Tests aren't run into existence, they're **created by writing code**

---

##### ❌ 测试用例 2:负面测试 - API 返回错误状态码

##### ❌ Test Case 2: Negative Test - API Returns Error Status Code

```typescript
it("当 API 返回非 200 状态码时应该抛出错误 | Should throw error when API returns non-200 status", async () => {
```

**这是什么? | What is this?**

- 这是一个**负面测试**(Negative Test)
  - This is a **Negative Test**
- 测试当出错时,函数是否能正确处理错误
  - Test if function can handle errors correctly when things go wrong
- **对应文档要求:Test 2: Create negative tests**
  - **Corresponds to document requirement: Test 2: Create negative tests**

**场景描述 | Scenario Description:**
当 Dog API 网站返回错误(比如 500 服务器错误),我们的函数能不能正确处理这个错误,不让程序崩溃。

When Dog API website returns error (like 500 server error), can our function handle this error correctly and prevent program crash.

**真实世界类比 | Real-World Analogy:**

- 餐厅厨房着火了,服务员怎么告诉你 🔥
  - Restaurant kitchen on fire, how does waiter tell you 🔥
- ATM 机故障了,怎么提示你 ⚠️
  - ATM malfunctioned, how does it notify you ⚠️
- 打电话对方关机了,怎么播放提示音 📵
  - Call when other party's phone is off, how does it play notification 📵

**测试代码 | Test Code:**

```typescript
// Arrange:让假 fetch 返回一个失败的响应 | Arrange: Make fake fetch return failed response
(global.fetch as any).mockResolvedValueOnce({
  ok: false, // ❌ HTTP 请求失败了 | HTTP request failed
  status: 500, // 状态码 500(服务器内部错误) | Status code 500 (Internal Server Error)
});

// Act & Assert:期望函数抛出包含特定消息的错误
// Act & Assert: Expect function to throw error with specific message
await expect(getRandomDogImage()).rejects.toThrow(
  "Dog API returned status 500",
);
```

**这段代码在干什么? | What is this code doing?**

1. **模拟 Dog API 返回 500 错误**(就像服务器崩溃了)
   - **Mock Dog API returning 500 error** (as if server crashed)
2. **调用我们的函数 | Call our function**
3. **检查函数是否正确抛出了错误**,错误信息包含 "Dog API returned status 500"
   - **Check if function correctly threw error** with message containing "Dog API returned status 500"

**`rejects.toThrow()` 是什么意思? | What does `rejects.toThrow()` mean?**

- `rejects`: 期望 Promise 被拒绝(rejected)
  - `rejects`: Expect Promise to be rejected
- `toThrow()`: 期望抛出错误
  - `toThrow()`: Expect to throw error
- `toThrow("Dog API returned status 500")`: 错误信息包含这段文字
  - `toThrow("Dog API returned status 500")`: Error message contains this text

**为什么要测试错误情况? | Why Test Error Cases?**

- 确保程序不会崩溃
  - Ensure program doesn't crash
- 给用户友好的错误提示
  - Give users friendly error messages
- 让程序更稳定、更可靠
  - Make program more stable and reliable
- **这是专业开发的标准做法!**
  - **This is standard practice in professional development!**

---

##### ❌ 测试用例 3:负面测试 - API 返回错误状态

##### ❌ Test Case 3: Negative Test - API Returns Error Status

```typescript
it("当 API 返回的 status 不是 success 时应该抛出错误 | Should throw error when API returns non-success status", async () => {
  (global.fetch as any).mockResolvedValueOnce({
    ok: true, // HTTP 请求成功了 | HTTP request succeeded
    json: async () => ({ message: "", status: "error" }), // 但数据显示失败 | But data shows failure
  });

  await expect(getRandomDogImage()).rejects.toThrow(
    "Failed to fetch dog image from API",
  );
});
```

**场景说明 | Scenario Explanation:**

- HTTP 请求成功(ok: true,状态码 200)
  - HTTP request succeeded (ok: true, status code 200)
- 但是返回的 JSON 数据中 `status` 字段是 "error" 而不是 "success"
  - But returned JSON data has `status` field as "error" instead of "success"
- 这种情况下函数应该抛出错误
  - In this case function should throw error

**真实场景举例 | Real Scenario Example:**

- 你访问 Dog API,网络连接成功
  - You access Dog API, network connection succeeds
- 但是 API 返回:`{"status": "error", "message": "数据库出错了"}`
  - But API returns: `{"status": "error", "message": "Database error"}`
- 虽然网络通了,但是没拿到狗狗图片,应该报错
  - Although network connected, didn't get dog image, should error

**为什么会有这种情况? | Why Does This Happen?**

- 服务器接收到请求(HTTP 200)
  - Server received request (HTTP 200)
- 但是业务逻辑失败(数据库查询失败、没有数据等)
  - But business logic failed (database query failed, no data, etc.)
- 这是两层错误检查:HTTP 层 + 业务层
  - This is two-layer error checking: HTTP layer + Business layer

---

##### ❌ 测试用例 4:负面测试 - 网络错误

##### ❌ Test Case 4: Negative Test - Network Error

```typescript
it("当网络请求失败时应该抛出错误 | Should throw error when network request fails", async () => {
  // 模拟网络彻底断了 | Mock network completely down
  (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

  await expect(getRandomDogImage()).rejects.toThrow(
    "Failed to fetch dog image: Network error",
  );
});
```

**场景说明 | Scenario Explanation:**

- 模拟网络完全断了,fetch 直接失败
  - Mock network completely down, fetch fails directly
- 可能的原因:WiFi 断了、DNS 解析失败、超时等
  - Possible reasons: WiFi disconnected, DNS resolution failed, timeout, etc.
- 函数应该捕获这个错误并重新抛出一个友好的错误消息
  - Function should catch this error and re-throw a friendly error message

**`mockRejectedValueOnce` vs `mockResolvedValueOnce`:**

- `Resolved`: Promise 成功resolve
  - `Resolved`: Promise successfully resolved
- `Rejected`: Promise 失败reject(抛出错误)
  - `Rejected`: Promise failed/rejected (threw error)
- 这里用 Rejected 模拟网络直接失败
  - Here use Rejected to mock network directly failing

---

#### 🎯 总结:你创造了什么测试?

#### 🎯 Summary: What Tests Did You Create?

你刚才通过复制代码,**创造了4个测试用例**:

By copying the code, you just **created 4 test cases**:

| 测试编号 Test # | 类型 Type   | 测试什么 What to Test                                   | 对应文档要求 Document Requirement | 真实类比 Real-World Analogy                                 |
| --------------- | ----------- | ------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| 测试1 Test 1    | ✅ Positive | 正常情况返回图片 <br> Normal case returns image         | Test 1: Create positive test      | 正常点外卖,送餐成功 <br> Normal food delivery succeeds      |
| 测试2 Test 2    | ❌ Negative | API 返回 500 错误 <br> API returns 500 error            | Test 2: Create negative tests     | 餐厅爆满,无法接单 <br> Restaurant full, can't take order    |
| 测试3 Test 3    | ❌ Negative | API 返回 status="error" <br> API returns status="error" | Test 2: Create negative tests     | 餐厅接单但没食材 <br> Restaurant accepts but no ingredients |
| 测试4 Test 4    | ❌ Negative | 网络完全失败 <br> Network completely fails              | Test 2: Create negative tests     | 电话都打不通 <br> Can't even connect call                   |

**Positive Test(正面测试) | Positive Test:**

- 测试在一切正常的情况下,函数能正确工作
  - Test that function works correctly when everything is normal
- 验证"快乐路径"(Happy Path)
  - Verify "Happy Path"

**Negative Test(负面测试) | Negative Test:**

- 测试在出错的情况下,函数能不能正确处理错误
  - Test if function can handle errors correctly when things go wrong
- 验证错误处理逻辑
  - Verify error handling logic

**你已经满足了作业要求!** ✅

**You've met the assignment requirements!** ✅

---

## 第八部分:运行测试(最关键!)

## Part 8: Run Tests (Most Critical!)

### 步骤 12:运行测试

### Step 12: Run Tests

#### ❓ 问题:"怎么运行测试?"

#### ❓ Question: "How to Run Tests?"

#### 操作场所 | Where to Operate

**终端/命令行,位于 server 文件夹**

**Terminal/Command Line, in server folder**

#### 详细操作步骤(跟着做) | Detailed Steps (Follow Along)

**第1步:打开终端 | Step 1: Open Terminal**

在 VS Code 中 | In VS Code:

- 方法1 | Method 1:按键盘上的 `` Ctrl + ` `` (反引号键,在 Esc 下面)
  - Press `` Ctrl + ` `` on keyboard (backtick key, below Esc)
- 方法2 | Method 2:点击顶部菜单:终端 → 新建终端
  - Click top menu: Terminal → New Terminal
- 方法3 | Method 3:点击底部状态栏的终端图标
  - Click terminal icon in bottom status bar

**第2步:确认当前位置 | Step 2: Confirm Current Location**

看终端提示符,应该显示:

Terminal prompt should show:

```
PS E:\Github\dog-starter-template>
```

如果不在这个位置,先导航到项目根目录:

If not at this location, navigate to project root first:

```bash
cd E:\Github\dog-starter-template
```

**第3步:进入 server 文件夹 | Step 3: Enter server Folder**

```bash
cd server
```

现在提示符应该显示:

Prompt should now show:

```
PS E:\Github\dog-starter-template\server>
```

**第4步:运行测试命令 | Step 4: Run Test Command**

输入以下命令并按回车:

Type the following command and press Enter:

```bash
npm run test
```

**第5步:等待结果 | Step 5: Wait for Results**

- 第一次运行可能需要 10-20 秒(需要编译代码)
  - First run may take 10-20 seconds (needs to compile code)
- 后续运行会更快(3-5秒)
  - Subsequent runs will be faster (3-5 seconds)
- 你会看到 Vitest 启动并运行测试
  - You'll see Vitest start and run tests

---

#### 🎯 预期输出(成功的样子) | Expected Output (What Success Looks Like)

如果你正确完成了步骤 11,你会看到类似这样的输出:

If you correctly completed Step 11, you'll see output like this:

```
 ✓ server/tests/dogService.test.ts (4) 312ms
   ✓ dogService (4) 311ms
     ✓ getRandomDogImage (4) 310ms
       ✓ 应该成功返回狗狗图片数据 289ms
       ✓ 当 API 返回非 200 状态码时应该抛出错误 8ms
       ✓ 当 API 返回的 status 不是 success 时应该抛出错误 6ms
       ✓ 当网络请求失败时应该抛出错误 7ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  14:23:15
   Duration  1.23s (transform 89ms, setup 0ms, collect 201ms, tests 312ms)

 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

**输出解读 | Output Explanation:**

| 部分 Part                    | 含义 Meaning                             |
| ---------------------------- | ---------------------------------------- |
| `✓` (绿色勾 green checkmark) | 测试通过 <br> Test passed                |
| `(4)`                        | 有4个测试 <br> 4 tests                   |
| `289ms`                      | 测试耗时 <br> Test duration              |
| `Test Files 1 passed (1)`    | 1个测试文件通过 <br> 1 test file passed  |
| `Tests 4 passed (4)`         | 4个测试全部通过 <br> All 4 tests passed  |
| `Duration 1.23s`             | 总共用时1.23秒 <br> Total duration 1.23s |

---

#### ❓ 问题:"结果是什么?怎么判断?"

#### ❓ Question: "What are the Results? How to Judge?"

### 判断测试成功或失败 | Judge Test Success or Failure

#### ✅ 成功的标志 | Success Indicators

**1. 看符号 | Look at Symbols:**

- `✓` (绿色勾 green checkmark) = 通过 ✅ | Passed ✅
- 颜色是绿色 | Color is green

**2. 看统计 | Look at Statistics:**

```
Test Files  1 passed (1)    ← 1个文件通过,0个失败 | 1 file passed, 0 failed
Tests  4 passed (4)          ← 4个测试通过,0个失败 | 4 tests passed, 0 failed
```

**3. 看文字 | Look at Text:**

- 没有 "failed" 字样 | No "failed" text
- 没有红色的错误信息 | No red error messages
- 每个测试名字前都有 ✓ | Each test name has ✓ in front

**4. 看底部提示 | Look at Bottom Prompt:**

```
PASS  Waiting for file changes...
```

- `PASS` 表示全部通过 | `PASS` means all passed
- Vitest 继续监听文件变化(Watch Mode)
  - Vitest continues listening for file changes (Watch Mode)

---

#### ❌ 失败的样子(如果出错) | What Failure Looks Like (If Error Occurs)

```
 ✗ server/tests/dogService.test.ts > dogService > getRandomDogImage > 应该成功返回狗狗图片数据

   AssertionError: expected { imageUrl: '...', status... } to equal { imageUrl: '...', status... }

   - Expected  (期望的结果 | Expected result)
   + Received  (实际的结果 | Actual result)

   Object {
   -  imageUrl: "https://images.dog.ceo/breeds/..."   // 应该是这个 | Should be this
   +  imageUrl: "wrong-url"                            // 实际是这个 | Actually this
     status: "success"
   }

   ❯ server/tests/dogService.test.ts:29:18

 Test Files  1 failed (1)
      Tests  1 failed | 3 passed (4)
   Start at  14:23:15
   Duration  1.56s

 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

**失败标志 | Failure Indicators:**

| 标志 Indicator           | 含义 Meaning                                                  |
| ------------------------ | ------------------------------------------------------------- |
| `✗` (红色叉 red X)       | 测试失败 <br> Test failed                                     |
| 红色文字 Red text        | 有错误 <br> Has error                                         |
| `1 failed`               | 1个测试失败 <br> 1 test failed                                |
| `Expected` vs `Received` | 期望值 vs 实际值不匹配 <br> Expected vs actual value mismatch |
| `FAIL`                   | 有测试失败 <br> Tests failed                                  |

**错误信息解读 | Error Message Explanation:**

- `AssertionError`: 断言失败 | Assertion failed
- `Expected`: 你期望的结果 | Result you expected
- `Received`: 实际得到的结果 | Result actually received
- `❯ server/tests/dogService.test.ts:29:18`: 错误在哪一行 | Which line has error

---

#### 🔧 如果测试失败怎么办? | What If Tests Fail?

**1. 不要慌! | Don't Panic!**

- 测试失败是正常的学习过程
  - Test failures are normal part of learning
- 错误信息会告诉你哪里出错了
  - Error messages tell you what went wrong

**2. 仔细读错误信息 | Carefully Read Error Messages**

- 先看 `Expected` vs `Received`
  - First look at `Expected` vs `Received`
- 找出期望值和实际值的差异
  - Find differences between expected and actual values

**3. 检查代码 | Check Code**

- 对比你的代码和指南中的代码
  - Compare your code with code in guide
- 逐行检查是否有遗漏或错误
  - Check line by line for omissions or errors

**4. 常见错误 | Common Errors:**

| 错误 Error                       | 原因 Cause                                   | 解决 Solution                                                               |
| -------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| `Cannot find module 'vitest'`    | 没有安装依赖 <br> Dependencies not installed | `npm install`                                                               |
| `global.fetch is not a function` | 没有 mock fetch <br> fetch not mocked        | 确保有 `global.fetch = vi.fn()` <br> Ensure `global.fetch = vi.fn()` exists |
| `Timeout`                        | 测试超时 <br> Test timeout                   | 检查是否用了真实的 fetch <br> Check if using real fetch                     |
| `SyntaxError`                    | 语法错误 <br> Syntax error                   | 检查括号、引号是否匹配 <br> Check brackets, quotes match                    |

---

### 步骤 13:停止测试监听

### Step 13: Stop Test Watching

#### 如何停止 | How to Stop

测试默认运行在 **Watch Mode**(监听模式):

Tests run in **Watch Mode** by default:

- 文件改变时自动重新运行
  - Automatically rerun when files change
- 要停止测试,在终端按 `q` 或 `Ctrl + C`
  - To stop tests, press `q` or `Ctrl + C` in terminal

---

### 步骤 14:只运行一次测试(不监听)

### Step 14: Run Tests Once (No Watching)

有时候你只想运行一次测试,看看结果,不想让它一直监听。

Sometimes you just want to run tests once, see results, don't want it to keep watching.

#### 操作方式 | How to Operate

```bash
npm run test:run
```

#### 和 `npm run test` 的区别 | Difference from `npm run test`

| 命令 Command       | 模式 Mode  | 特点 Features                                                                  |
| ------------------ | ---------- | ------------------------------------------------------------------------------ |
| `npm run test`     | Watch Mode | 持续监听,文件改变自动重新运行 <br> Continuous watch, auto-rerun on file change |
| `npm run test:run` | Run Once   | 运行一次就结束 <br> Run once and exit                                          |

#### 什么时候用 `test:run`? | When to Use `test:run`?

- 在 CI/CD 环境中 | In CI/CD environment
- 只想快速检查一次结果 | Just want quick one-time check
- 不需要持续开发 | Don't need continuous development

---

### 步骤 15:查看代码覆盖率

### Step 15: View Code Coverage

#### 操作方式 | How to Operate

```bash
npm run test -- --coverage
```

**注意 | Note:** 两个 `--` 之间有空格! | Space between two `--`!

#### 发生什么? | What Happens?

测试运行完后,会额外显示代码覆盖率报告:

After tests run, will additionally show code coverage report:

```
 % Coverage report from v8
------------------------------------|---------|----------|---------|---------|-------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------------|---------|----------|---------|---------|-------------------
All files                           |     100 |      100 |     100 |     100 |
 server/services/dogService.ts      |     100 |      100 |     100 |     100 |
------------------------------------|---------|----------|---------|---------|-------------------

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  14:25:32
   Duration  1.45s (transform 92ms, setup 0ms, collect 215ms, tests 389ms)
```

#### 覆盖率指标解读 | Coverage Metrics Explanation

| 指标 Metric | 英文全称 Full Name | 含义 Meaning                       | 说明 Description                                                  |
| ----------- | ------------------ | ---------------------------------- | ----------------------------------------------------------------- |
| % Stmts     | Statements         | 语句覆盖率 <br> Statement coverage | 有多少行代码被执行了 <br> How many lines of code executed         |
| % Branch    | Branches           | 分支覆盖率 <br> Branch coverage    | 有多少 if/else 分支被测试了 <br> How many if/else branches tested |
| % Funcs     | Functions          | 函数覆盖率 <br> Function coverage  | 有多少函数被调用了 <br> How many functions called                 |
| % Lines     | Lines              | 行覆盖率 <br> Line coverage        | 有多少行被执行了 <br> How many lines executed                     |

**判断标准 | Judgment Criteria:**

| 覆盖率 Coverage         | 评价 Rating                     | 图标 Icon |
| ----------------------- | ------------------------------- | --------- |
| 100%                    | 完美 <br> Perfect               | ✅✅✅    |
| 80% 以上 <br> Above 80% | 良好 <br> Good                  | ✅✅      |
| 60% - 80%               | 一般 <br> Average               | ⚠️        |
| 60% 以下 <br> Below 60% | 需要改进 <br> Needs improvement | ❌        |

#### 我们的测试覆盖率应该是 100%

#### Our Test Coverage Should Be 100%

**为什么? | Why?**

- 测试了正常情况(测试用例1) ✅
  - Tested normal case (test case 1) ✅
- 测试了所有错误情况(测试用例2-4) ❌❌❌
  - Tested all error cases (test cases 2-4) ❌❌❌
- 每一行代码都被执行了
  - Every line of code executed
- 每个分支(if/else)都被测试了
  - Every branch (if/else) tested

#### 查看详细的 HTML 报告 | View Detailed HTML Report

运行覆盖率测试后,Vitest 会生成 HTML 报告:

After running coverage test, Vitest generates HTML report:

**位置 | Location:** `server/coverage/index.html`

**如何查看 | How to View:**

1. 在 VS Code 中,右键点击 `coverage/index.html`
   - In VS Code, right-click `coverage/index.html`
2. 选择 "Open with Live Server" 或直接在浏览器打开
   - Select "Open with Live Server" or open directly in browser
3. 你会看到一个可交互的覆盖率报告
   - You'll see an interactive coverage report
4. 可以点击文件查看哪些行被覆盖了(绿色),哪些没有(红色)
   - Can click files to see which lines covered (green), which not (red)

---

### 步骤 16:使用测试 UI 界面(可选)

### Step 16: Use Test UI Interface (Optional)

这是一个可视化的测试界面,更直观!

This is a visual test interface, more intuitive!

#### 操作方式 | How to Operate

```bash
npm run test:ui
```

#### 会发生什么 | What Will Happen

1. Vitest 会启动一个本地服务器
   - Vitest will start a local server
2. 自动打开浏览器,显示一个网页界面
   - Automatically open browser, show web interface

#### 界面功能 | Interface Features

```
Vitest UI
├─ 📁 dogService.test.ts
   └─ 📦 dogService
      └─ 📦 getRandomDogImage
         ├─ ✅ 应该成功返回狗狗图片数据 | Should successfully return dog image data
         ├─ ✅ 当 API 返回非 200 状态码时应该抛出错误 | Should throw error when API returns non-200 status
         ├─ ✅ 当 API 返回的 status 不是 success 时应该抛出错误 | Should throw error when API returns non-success status
         └─ ✅ 当网络请求失败时应该抛出错误 | Should throw error when network request fails
```

**可以做什么 | What You Can Do:**

- ✅ 点击任意测试查看详细信息
  - Click any test to see details
- ✅ 单独运行某个测试(而不是全部)
  - Run individual test (not all)
- ✅ 查看测试执行时间
  - View test execution time
- ✅ 查看代码覆盖率
  - View code coverage
- ✅ 查看测试报告和图表
  - View test reports and charts
- ✅ 更直观地看到哪些通过、哪些失败
  - More intuitively see which passed, which failed

#### 如何关闭 | How to Close

在终端按 `Ctrl + C` 停止服务器。

Press `Ctrl + C` in terminal to stop server.

---

## 第九部分:测试最佳实践

## Part 9: Testing Best Practices

### 测试命名规范 | Test Naming Conventions

#### ✅ 好的测试名称 | Good Test Names

```typescript
it("应该在 API 返回 500 错误时抛出异常 | Should throw exception when API returns 500 error", () => {
  // 清楚地说明:什么情况下,应该发生什么
  // Clearly states: under what condition, what should happen
});

it("应该成功返回包含 imageUrl 的对象 | Should successfully return object containing imageUrl", () => {
  // 明确测试目标
  // Clear test objective
});
```

#### ❌ 不好的测试名称 | Bad Test Names

```typescript
it("test1", () => {
  // 完全不知道在测试什么
  // Completely unclear what's being tested
});

it("works", () => {
  // 太模糊
  // Too vague
});

it("测试 | test", () => {
  // 没有具体信息
  // No specific information
});
```

#### 命名原则 | Naming Principles

测试名称应该清楚说明:**在什么情况下,应该发生什么**

Test names should clearly state: **Under what condition, what should happen**

格式 | Format:`应该 + 期望行为 + (在...条件下) | Should + expected behavior + (under...condition)`

示例 | Examples:

- ✅ "应该返回包含图片 URL 的对象 | Should return object containing image URL"
- ✅ "当输入为空时应该抛出错误 | Should throw error when input is empty"
- ✅ "应该调用 API 一次 | Should call API once"

---

### AAA 模式 | AAA Pattern

所有测试都应该遵循 **AAA 模式**:

All tests should follow the **AAA Pattern**:

```typescript
it("测试描述 | Test description", () => {
  // 1. Arrange(准备):设置测试数据和环境
  //    Arrange: set up test data and environment
  const input = "test";
  const expected = "expected result";
  const mockData = { value: 123 };

  // 2. Act(执行):执行被测试的代码
  //    Act: execute the code being tested
  const result = myFunction(input);

  // 3. Assert(断言):验证结果
  //    Assert: verify the result
  expect(result).toBe(expected);
});
```

**为什么使用 AAA 模式? | Why Use AAA Pattern?**

- 代码结构清晰 | Code structure is clear
- 易于理解和维护 | Easy to understand and maintain
- 遵循业界标准 | Follows industry standards

---

### 测试应该覆盖的场景 | Scenarios Tests Should Cover

每个函数应该测试 | Each function should test:

#### 1. 正常情况(Happy Path) ✅

测试在一切正常时的行为:

Test behavior when everything is normal:

```typescript
it("应该在正常输入时返回正确结果 | Should return correct result with normal input", () => {
  // 测试标准用例
  // Test standard use case
});
```

#### 2. 边界情况(Edge Cases) ⚠️

测试极限值、特殊值:

Test extreme values, special values:

```typescript
it("应该处理空字符串 | Should handle empty string", () => {
  // 测试 "" | Test ""
});

it("应该处理非常大的数字 | Should handle very large number", () => {
  // 测试 Number.MAX_VALUE | Test Number.MAX_VALUE
});

it("应该处理负数 | Should handle negative numbers", () => {
  // 测试 -1 | Test -1
});
```

#### 3. 错误情况(Error Cases) ❌

测试各种错误:

Test various errors:

```typescript
it("当参数为 null 时应该抛出错误 | Should throw error when parameter is null", () => {
  // 测试 null | Test null
});

it("当网络失败时应该抛出错误 | Should throw error when network fails", () => {
  // 测试网络错误 | Test network error
});
```

---

### 测试独立性 | Test Independence

#### 原则:每个测试应该彼此独立

#### Principle: Each Test Should Be Independent

**✅ 好的做法:每个测试有自己的数据 | Good Practice: Each Test Has Its Own Data**

```typescript
describe("myFunction", () => {
  it("测试1 | Test 1", () => {
    const data = createTestData(); // 独立的测试数据 | Independent test data
    const result = myFunction(data);
    expect(result).toBe("expected");
  });

  it("测试2 | Test 2", () => {
    const data = createTestData(); // 另一份独立的数据 | Another independent data set
    const result = myFunction(data);
    expect(result).toBe("expected");
  });
});
```

**❌ 不好的做法:测试之间共享数据 | Bad Practice: Tests Share Data**

```typescript
describe("myFunction", () => {
  let sharedData; // ❌ 共享变量 | Shared variable

  it("测试1 | Test 1", () => {
    sharedData = "test"; // 修改共享数据 | Modify shared data
  });

  it("测试2 | Test 2", () => {
    expect(sharedData).toBe("test"); // ❌ 依赖测试1的结果 | Depends on Test 1's result
  });
});
```

**为什么要独立? | Why Be Independent?**

- 测试顺序改变不会影响结果
  - Changing test order doesn't affect results
- 易于调试(不需要考虑其他测试的影响)
  - Easy to debug (don't need to consider other tests' effects)
- 可以并行运行测试
  - Can run tests in parallel

---

### 使用 beforeEach 和 afterEach | Using beforeEach and afterEach

**清理测试环境 | Clean Test Environment:**

```typescript
describe("myTests", () => {
  let mockData;

  beforeEach(() => {
    // 在每个测试前执行 | Execute before each test
    mockData = createMockData();
    vi.clearAllMocks();
  });

  afterEach(() => {
    // 在每个测试后执行 | Execute after each test
    // 清理资源,重置状态 | Clean resources, reset state
  });

  it("测试1 | Test 1", () => {
    // mockData 是新的 | mockData is new
  });

  it("测试2 | Test 2", () => {
    // mockData 又是新的 | mockData is new again
  });
});
```

---

### 测试应该快速运行 | Tests Should Run Quickly

**原则:测试应该在几秒内完成**

**Principle: Tests should complete in seconds**

**✅ 好的做法 | Good Practices:**

- 使用 mock 避免真实的网络请求
  - Use mock to avoid real network requests
- 使用 mock 避免真实的数据库操作
  - Use mock to avoid real database operations
- 避免 sleep/延迟
  - Avoid sleep/delays

**❌ 不好的做法 | Bad Practices:**

```typescript
it("测试 | Test", async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // ❌ 等5秒 | Wait 5 seconds
  const result = await realApiCall(); // ❌ 真实的API调用 | Real API call
});
```

**为什么要快? | Why Be Fast?**

- 开发者会频繁运行测试
  - Developers run tests frequently
- 慢的测试会降低开发效率
  - Slow tests reduce development efficiency
- 快的测试鼓励更频繁的测试
  - Fast tests encourage more frequent testing

---

### 一个测试只测一件事 | One Test Tests One Thing

**✅ 好的做法 | Good Practice:**

```typescript
it("应该返回正确的 imageUrl | Should return correct imageUrl", () => {
  // 只测试 imageUrl | Only test imageUrl
  expect(result.imageUrl).toBe("...");
});

it("应该返回正确的 status | Should return correct status", () => {
  // 只测试 status | Only test status
  expect(result.status).toBe("success");
});
```

**❌ 不好的做法 | Bad Practice:**

```typescript
it("应该返回正确的结果并且调用API一次并且没有错误 | Should return correct result and call API once and have no error", () => {
  // ❌ 测试太多东西 | Testing too many things
  expect(result.imageUrl).toBe("...");
  expect(result.status).toBe("success");
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(console.error).not.toHaveBeenCalled();
});
```

**为什么? | Why?**

- 测试失败时,容易定位问题
  - When test fails, easy to locate problem
- 测试名称更清晰
  - Test names are clearer
- 符合单一职责原则
  - Follows single responsibility principle

---

## 第十部分:常见问题和解决方案

## Part 10: Common Issues and Solutions

### 问题 1:命令找不到

### Issue 1: Command Not Found

#### 错误信息 | Error Message

```
'npm' 不是内部或外部命令,也不是可运行的程序或批处理文件。
'npm' is not recognized as an internal or external command, operable program or batch file.
```

#### 原因 | Cause

Node.js 没有安装或没有添加到环境变量。

Node.js not installed or not added to environment variables.

#### 解决方案 | Solution

1. 重新安装 Node.js | Reinstall Node.js
2. 安装时勾选"Add to PATH" | Check "Add to PATH" during installation
3. 重启 VS Code | Restart VS Code
4. 重新打开终端 | Reopen terminal
5. 运行 `node --version` 验证 | Run `node --version` to verify

---

### 问题 2:模块找不到

### Issue 2: Module Not Found

#### 错误信息 | Error Message

```
Error: Cannot find module 'vitest'
```

#### 原因 | Cause

依赖包未安装。

Dependencies not installed.

#### 解决方案 | Solution

```bash
cd server
npm install
```

等待安装完成,然后重新运行测试。

Wait for installation to complete, then rerun tests.

---

### 问题 3:没有 test 脚本

### Issue 3: No test Script

#### 错误信息 | Error Message

```
npm ERR! missing script: test
```

#### 原因 | Cause

你不在 `server` 文件夹。

You're not in `server` folder.

#### 解决方案 | Solution

```bash
cd server
npm run test
```

确保你在正确的文件夹。

Ensure you're in the correct folder.

---

### 问题 4:测试一直失败

### Issue 4: Tests Keep Failing

#### 可能原因 | Possible Causes

1. **代码复制不完整 | Code Copied Incompletely**
   - 对比指南中的代码
     - Compare with code in guide
   - 确保所有代码都复制了
     - Ensure all code copied

2. **语法错误 | Syntax Error**
   - 检查括号是否匹配:`{ }` `( )` `[ ]`
     - Check brackets match: `{ }` `( )` `[ ]`
   - 检查引号是否匹配:`" "` `' '`
     - Check quotes match: `" "` `' '`
   - 检查逗号是否正确
     - Check commas are correct

3. **Mock 没有设置 | Mock Not Set Up**
   - 确保有 `global.fetch = vi.fn()`
     - Ensure `global.fetch = vi.fn()` exists
   - 确保有 `beforeEach(() => vi.clearAllMocks())`
     - Ensure `beforeEach(() => vi.clearAllMocks())` exists

4. **文件路径错误 | File Path Error**
   - 检查 import 路径:`"../services/dogService"`
     - Check import path: `"../services/dogService"`
   - 确保文件存在
     - Ensure file exists

#### 解决步骤 | Solution Steps

1. 仔细阅读错误信息 | Carefully read error messages
2. 对比你的代码和指南代码 | Compare your code with guide code
3. 使用 VS Code 的语法检查(红色波浪线) | Use VS Code syntax checking (red squiggly lines)
4. 逐个测试运行,找出哪个失败 | Run tests one by one to find which fails

---

### 问题 5:测试超时

### Issue 5: Test Timeout

#### 错误信息 | Error Message

```
Error: Timeout - Async function did not complete within 5000ms
```

#### 原因 | Cause

测试用了真实的 fetch 而不是 mock。

Test used real fetch instead of mock.

#### 解决方案 | Solution

确保代码顶部有:

Ensure at top of code:

```typescript
global.fetch = vi.fn();
```

确保每个测试都设置了 mock:

Ensure each test has mock set up:

```typescript
(global.fetch as any).mockResolvedValueOnce({...});
```

---

### 问题 6:如何只运行一个测试?

### Issue 6: How to Run Just One Test?

#### 方法1:使用 `it.only` | Method 1: Use `it.only`

```typescript
it.only("应该成功返回狗狗图片数据 | Should successfully return dog image data", async () => {
  // 只运行这个测试 | Only run this test
});

it("其他测试 | Other test", () => {
  // 这个会被跳过 | This will be skipped
});
```

#### 方法2:使用测试 UI | Method 2: Use Test UI

```bash
npm run test:ui
```

在界面中点击想要运行的测试。

Click the test you want to run in the interface.

---

### 问题 7:如何跳过一个测试?

### Issue 7: How to Skip a Test?

#### 使用 `it.skip` | Use `it.skip`

```typescript
it.skip("暂时跳过这个测试 | Temporarily skip this test", () => {
  // 这个测试不会运行 | This test won't run
});
```

#### 使用 `it.todo` | Use `it.todo`

```typescript
it.todo("以后要写的测试 | Test to write later");
// 标记为待办,提醒你还没写完
// Mark as todo, reminds you it's not finished
```

---

### 问题 8:如何查看更详细的错误信息?

### Issue 8: How to See More Detailed Error Messages?

#### 在测试命令中添加 `--reporter=verbose`

#### Add `--reporter=verbose` to test command

```bash
npm run test -- --reporter=verbose
```

会显示更详细的输出。

Will show more detailed output.

---

### 问题 9:测试通过了,但覆盖率不是100%

### Issue 9: Tests Passed But Coverage Not 100%

#### 原因 | Cause

可能有些代码分支没有被测试到。

Some code branches may not be tested.

#### 解决方案 | Solution

1. 运行 `npm run test -- --coverage`
   - Run `npm run test -- --coverage`
2. 打开 `coverage/index.html`
   - Open `coverage/index.html`
3. 查看哪些行是红色的(未覆盖)
   - See which lines are red (not covered)
4. 添加测试来覆盖这些行
   - Add tests to cover these lines

---

## 第十一部分:扩展知识

## Part 11: Extended Knowledge

### TDD(测试驱动开发) | TDD (Test-Driven Development)

**TDD = Test-Driven Development | 测试驱动开发**

#### 流程 | Process

```
1. 红色阶段(Red) | Red Phase
   ↓
   先写测试(会失败,因为功能还没实现)
   Write tests first (will fail because feature not implemented yet)

2. 绿色阶段(Green) | Green Phase
   ↓
   写刚好够让测试通过的代码
   Write just enough code to make tests pass

3. 重构阶段(Refactor) | Refactor Phase
   ↓
   优化代码,保持测试通过
   Optimize code while keeping tests passing

4. 回到步骤1,下一个功能
   Return to step 1 for next feature
```

#### 优点 | Advantages

- ✅ 保证代码有测试覆盖
  - Ensures code has test coverage
- ✅ 促进更好的设计
  - Promotes better design
- ✅ 减少 bug
  - Reduces bugs
- ✅ 文档作用(测试就是规格说明)
  - Documentation effect (tests are specifications)

#### 示例 | Example

```typescript
// 1. 先写测试(红色) | Write test first (red)
it("应该计算两个数的和 | Should calculate sum of two numbers", () => {
  expect(add(2, 3)).toBe(5); // ❌ 失败,add 还不存在 | Fail, add doesn't exist yet
});

// 2. 写最简单的实现(绿色) | Write simplest implementation (green)
function add(a: number, b: number): number {
  return a + b; // ✅ 测试通过 | Test passes
}

// 3. 重构(如果需要) | Refactor (if needed)
function add(a: number, b: number): number {
  // 添加参数验证 | Add parameter validation
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("参数必须是数字 | Parameters must be numbers");
  }
  return a + b; // ✅ 测试还是通过 | Tests still pass
}
```

---

### 持续集成(CI) | Continuous Integration (CI)

**CI = Continuous Integration | 持续集成**

在实际项目中,测试通常在每次代码提交时自动运行。

In real projects, tests typically run automatically on every code commit.

#### GitHub Actions 示例 | GitHub Actions Example

创建文件 | Create file:`.github/workflows/test.yml`

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install dependencies
        run: |
          cd server
          npm install

      - name: Run tests
        run: |
          cd server
          npm run test:run

      - name: Check coverage
        run: |
          cd server
          npm run test -- --coverage
```

#### 效果 | Effects

- 每次 push 代码到 GitHub
  - Each time code pushed to GitHub
- 自动运行测试
  - Automatically run tests
- 如果测试失败,会收到通知
  - If tests fail, receive notification
- 代码审查时可以看到测试结果
  - Can see test results during code review

---

### 其他测试类型 | Other Test Types

#### 单元测试 vs 集成测试 vs E2E 测试

#### Unit Tests vs Integration Tests vs E2E Tests

| 类型 Type                      | 范围 Scope                             | 速度 Speed       | 何时用 When to Use                          | 示例 Example                                               |
| ------------------------------ | -------------------------------------- | ---------------- | ------------------------------------------- | ---------------------------------------------------------- |
| 单元测试 <br> Unit Test        | 单个函数/类 <br> Single function/class | 快 <br> Fast     | 测试单个函数 <br> Test single function      | 测试 `getRandomDogImage()` <br> Test `getRandomDogImage()` |
| 集成测试 <br> Integration Test | 多个模块 <br> Multiple modules         | 中等 <br> Medium | 测试模块协作 <br> Test module collaboration | 测试 Controller + Service <br> Test Controller + Service   |
| E2E测试 <br> E2E Test          | 整个应用 <br> Entire application       | 慢 <br> Slow     | 测试用户流程 <br> Test user flow            | 测试完整的 API 请求 <br> Test complete API request         |

#### 测试金字塔 | Test Pyramid

```
         /\
        /  \       E2E Tests (少量,慢,昂贵 | Few, Slow, Expensive)
       /____\
      /      \
     / 集成测试 \   Integration Tests (中等 | Medium)
    / Integration\
   /______________\
   /              \
  /   单元测试     \  Unit Tests (大量,快,便宜 | Many, Fast, Cheap)
 /   Unit Tests    \
/____________________\
```

**原则 | Principles:**

- 大量的单元测试(金字塔底部)
  - Many unit tests (pyramid base)
- 适量的集成测试(金字塔中部)
  - Moderate integration tests (pyramid middle)
- 少量的 E2E 测试(金字塔顶部)
  - Few E2E tests (pyramid top)

---

## 第十二部分:总结与检查清单

## Part 12: Summary and Checklist

### 学习成果检查 | Learning Outcomes Checklist

完成本教程后,你应该能够:

After completing this tutorial, you should be able to:

- [ ] 理解项目的分层架构(Routes → Controllers → Services)
  - Understand project's layered architecture (Routes → Controllers → Services)
- [ ] 使用 Vitest 编写单元测试
  - Write unit tests using Vitest
- [ ] 理解 Positive Test 和 Negative Test 的区别
  - Understand difference between Positive Test and Negative Test
- [ ] 使用 mock 模拟外部依赖
  - Use mock to simulate external dependencies
- [ ] 测试异步函数(async/await)
  - Test async functions (async/await)
- [ ] 测试错误处理(try/catch)
  - Test error handling (try/catch)
- [ ] 运行测试并理解输出
  - Run tests and understand output
- [ ] 查看和理解代码覆盖率报告
  - View and understand code coverage reports
- [ ] 应用 AAA 模式编写清晰的测试
  - Apply AAA pattern to write clear tests
- [ ] 遵循测试最佳实践
  - Follow testing best practices

---

### 快速参考 | Quick Reference

#### 常用命令 | Common Commands

```bash
# 安装依赖 | Install dependencies
npm install

# 运行测试(监听模式) | Run tests (watch mode)
npm run test

# 运行测试一次 | Run tests once
npm run test:run

# 查看覆盖率 | View coverage
npm run test -- --coverage

# 打开测试 UI | Open test UI
npm run test:ui
```

#### 核心概念 | Core Concepts

**Mock:** 假的、模拟的对象,用于控制测试环境

**Mock:** Fake, simulated object used to control test environment

**AAA 模式 | AAA Pattern:** Arrange(准备) → Act(执行) → Assert(断言)

**AAA Pattern:** Arrange → Act → Assert

**Positive Test:** 测试正常情况

**Positive Test:** Test normal cases

**Negative Test:** 测试错误情况

**Negative Test:** Test error cases

**覆盖率 | Coverage:** 代码被测试覆盖的百分比

**Coverage:** Percentage of code covered by tests

---

### 下一步学习 | Next Steps

1. **实践 | Practice:** 尝试为 Controller 和 Routes 编写测试
   - Try writing tests for Controller and Routes
2. **阅读 | Read:** 学习更多测试模式和技巧
   - Learn more testing patterns and techniques
3. **探索 | Explore:** 了解 E2E 测试(端到端测试)
   - Learn about E2E testing (end-to-end testing)
4. **工具 | Tools:** 学习使用测试覆盖率工具
   - Learn to use code coverage tools
5. **CI/CD:** 了解持续集成和持续部署
   - Learn about continuous integration and continuous deployment

---

### 推荐资源 | Recommended Resources

- [Vitest 官方文档 | Official Documentation](https://vitest.dev/)
- [Jest Mock 指南 | Guide](https://jestjs.io/docs/mock-functions)
- [测试金字塔理论 | Test Pyramid Theory](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Dog CEO API 文档 | Documentation](https://dog.ceo/dog-api/)
- [TypeScript 官方文档 | Official Documentation](https://www.typescriptlang.org/)

---

## 附录:完整示例代码

## Appendix: Complete Example Code

### dogService.test.ts(完整代码 | Complete Code)

```typescript
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
    it("应该成功返回狗狗图片数据 | Should successfully return dog image data", async () => {
      // Arrange:准备模拟的 API 响应 | Arrange: Prepare mock API response
      const mockResponse = {
        message:
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      };

      // 模拟 fetch 返回成功响应 | Mock fetch to return success response
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      // Act:执行函数 | Act: Execute function
      const result = await getRandomDogImage();

      // Assert:验证结果 | Assert: Verify result
      expect(result).toEqual({
        imageUrl:
          "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        status: "success",
      });
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it("当 API 返回非 200 状态码时应该抛出错误 | Should throw error when API returns non-200 status", async () => {
      // Arrange:模拟失败的响应 | Arrange: Mock failed response
      (global.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      // Act & Assert:期望函数抛出错误 | Act & Assert: Expect function to throw error
      await expect(getRandomDogImage()).rejects.toThrow(
        "Dog API returned status 500",
      );
    });

    it("当 API 返回的 status 不是 success 时应该抛出错误 | Should throw error when API returns non-success status", async () => {
      // Arrange
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: "", status: "error" }),
      });

      // Act & Assert
      await expect(getRandomDogImage()).rejects.toThrow(
        "Failed to fetch dog image from API",
      );
    });

    it("当网络请求失败时应该抛出错误 | Should throw error when network request fails", async () => {
      // Arrange:模拟网络错误 | Arrange: Mock network error
      (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

      // Act & Assert
      await expect(getRandomDogImage()).rejects.toThrow(
        "Failed to fetch dog image: Network error",
      );
    });
  });
});
```

---

## 🎉 恭喜你完成学习! | Congratulations on Completing the Guide!

你现在已经掌握了:

You have now mastered:

- ✅ 如何为 Node.js/TypeScript 项目编写单元测试
  - How to write unit tests for Node.js/TypeScript projects
- ✅ 如何使用 Vitest 测试框架
  - How to use Vitest testing framework
- ✅ 如何使用 Mock 模拟外部依赖
  - How to use Mock to simulate external dependencies
- ✅ 如何测试正常和异常情况
  - How to test normal and exceptional cases
- ✅ 如何运行测试并理解结果
  - How to run tests and understand results

**继续加油!测试是专业开发的重要技能!** 💪

**Keep going! Testing is an important skill in professional development!** 💪

---

**如有问题,请参考 | If you have questions, refer to:**

- 常见问题部分 | Common Issues section
- Vitest 官方文档 | Vitest official documentation
- 询问老师或同学 | Ask teachers or classmates

**祝学习顺利!** 🎓

**Wish you success in your studies!** 🎓
