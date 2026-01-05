const PROJECT_DATA = {
    "bpm-knowledge": {
        "title": "BPM Knowledge System",
        "subtitle": "🧠 智慧型表單開發知識庫",
        "description": "整合 RAG 技術與 Azure OpenAI，打造專屬企業內部的智慧知識管理系統",
        "fullDescription": `
            <p class="text-slate-300 leading-relaxed mb-8">
                BPM Knowledge System 是一個專為企業內部開發的智慧知識庫系統。此專案整合了 RAG (Retrieval-Augmented Generation) 技術與 Azure OpenAI 服務，解決了表單開發過程中資訊分散與查詢不易的痛點，協助顧問、開發人員及使用者快速查找開發指南與常見問題。
            </p>

            <div class="mb-8">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="cpu" class="w-5 h-5 text-indigo-400"></i> 核心功能
                </h3>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-indigo-500 shrink-0"></i>
                        <span><strong>RAG 智慧檢索</strong>：結合向量搜尋與 GPT-4o 模型，提供精準的技術問答與程式碼範例。</span>
                    </li>
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-indigo-500 shrink-0"></i>
                        <span><strong>Cloud-Native 架構</strong>：採用 Azure Blob Storage 儲存動態資料，實現資料與邏輯分離的雲端原生設計。</span>
                    </li>
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-indigo-500 shrink-0"></i>
                        <span><strong>自動化部署</strong>：透過 Azure DevOps Pipeline 建立完整的 CI/CD 流程，自動部署至 IIS Server。</span>
                    </li>
                </ul>
            </div>

            <div class="mb-6">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="code-2" class="w-5 h-5 text-cyan-400"></i> 技術架構
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="bot" class="w-4 h-4 text-indigo-400"></i>
                            <h4 class="font-semibold text-white">Azure OpenAI</h4>
                        </div>
                        <p class="text-sm text-slate-400">整合 GPT-4o 與 Embedding 模型，具備強大的語意理解與生成能力。</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="container" class="w-4 h-4 text-indigo-400"></i>
                            <h4 class="font-semibold text-white">Docker 化部署</h4>
                        </div>
                        <p class="text-sm text-slate-400">容器化應用程式，確保開發與生產環境的一致性。</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="cloud" class="w-4 h-4 text-indigo-400"></i>
                            <h4 class="font-semibold text-white">Azure Cloud</h4>
                        </div>
                        <p class="text-sm text-slate-400">深度整合 Azure 雲端服務，包含 App Service、Storage Acount、Ai Search 與 DevOps。</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="terminal" class="w-4 h-4 text-indigo-400"></i>
                            <h4 class="font-semibold text-white">Flask Backend</h4>
                        </div>
                        <p class="text-sm text-slate-400">使用輕量級 Python Web 框架，提供高效的 API 服務。</p>
                    </div>
                </div>
            </div>
        `,
        "video": "assets/projects/bpm-knowledge/demo.mp4",
        "images": [],
        "tags": ["Python", "RAG", "Azure OpenAI", "Azure DevOps", "Docker"],
        "links": {
            "github": "",
            "demo": ""
        }
    },
    "aiwave": {
        "title": "AIWave",
        "subtitle": "🏆 台灣生成式 AI 應用黑客松",
        "description": "整合 AWS 雲端服務與 AI 技術，打造邊緣倉儲的即時數據分析系統",
        "fullDescription": `
            <p class="text-slate-300 leading-relaxed mb-8">
                AIWave 是一個專為邊緣倉儲設計的創新雲端 AI 解決方案。此專案在台灣生成式 AI 應用黑客松中，展示了如何運用 AWS 雲端服務構建高效、安全且具備高度擴展性的數據分析工作流，為企業提供即時的數據洞察。
            </p>

            <div class="mb-8">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="rocket" class="w-5 h-5 text-purple-400"></i> 核心功能
                </h3>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-purple-500 shrink-0"></i>
                        <span><strong>即時數據處理</strong>：自動化收集邊緣設備數據並進行即時分析。</span>
                    </li>
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-purple-500 shrink-0"></i>
                        <span><strong>AI 智能預測</strong>：運用生成式 AI 解讀數據趨勢，提供決策建議。</span>
                    </li>
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-purple-500 shrink-0"></i>
                        <span><strong>直觀儀表板</strong>：視覺化呈現關鍵指標，即時監控倉儲狀態。</span>
                    </li>
                </ul>
            </div>

            <div class="mb-6">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="zap" class="w-5 h-5 text-yellow-400"></i> 技術架構亮點
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="server" class="w-4 h-4 text-purple-400"></i>
                            <h4 class="font-semibold text-white">Serverless 架構</h4>
                        </div>
                        <p class="text-sm text-slate-400">使用 AWS Lambda 實現無伺服器運算，大幅降低營運成本與維護複雜度。</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="brain-circuit" class="w-4 h-4 text-purple-400"></i>
                            <h4 class="font-semibold text-white">AWS Bedrock 整合</h4>
                        </div>
                        <p class="text-sm text-slate-400">導入基礎模型，賦予系統強大的自然語言理解與生成能力。</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="database" class="w-4 h-4 text-purple-400"></i>
                            <h4 class="font-semibold text-white">DynamoDB 高速存取</h4>
                        </div>
                        <p class="text-sm text-slate-400">採用 NoSQL 資料庫確保毫秒級的資料讀寫效能，應對高併發需求。</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="shield-check" class="w-4 h-4 text-purple-400"></i>
                            <h4 class="font-semibold text-white">API Gateway 安全管理</h4>
                        </div>
                        <p class="text-sm text-slate-400">建立統一且安全的 API 入口，完善的流量控制與身分驗證機制。</p>
                    </div>
                </div>
            </div>
        `,
        "video": "assets/projects/aiwave/web-demo.mp4",
        "images": [],
        "tags": ["AWS", "Generative AI", "Full Stack", "AWS Lambda", "DynamoDB"],
        "links": {
            "github": "https://github.com/yChiNL/AI-powered-edge-cloud-warehouse",
            "demo": ""
        }
    },
    "paperassist": {
        "title": "PaperAssist",
        "subtitle": "📚 學術研究 RAG 聊天機器人",
        "description": "結合 RAG 架構與 LLM，打造專業的學術論文查詢助手",
        "fullDescription": `
            <p class="text-slate-300 leading-relaxed mb-8">
                PaperAssist 是一個專為學術研究設計的智能聊天機器人。它採用先進的 RAG (Retrieval-Augmented Generation) 架構，解決了傳統 LLM 在專業領域知識幻覺的問題，能夠精準地根據論文內容回答複雜的學術提問。
            </p>

            <div class="mb-8">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="layers" class="w-5 h-5 text-blue-400"></i> 核心技術
                </h3>
                <ul class="space-y-3 text-slate-300">
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-blue-500 shrink-0"></i>
                        <span><strong>RAG 架構實作</strong>：深度整合 LLM 與外部向量知識庫，提升回答的準確性與可信度。</span>
                    </li>
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-blue-500 shrink-0"></i>
                        <span><strong>混合檢索策略</strong>：結合關鍵字搜尋 (Keyword Search) 與語義搜尋 (Semantic Search)，最大化資訊召回率。</span>
                    </li>
                    <li class="flex gap-3">
                        <i data-lucide="check" class="w-5 h-5 text-blue-500 shrink-0"></i>
                        <span><strong>智慧分塊 (Chunking)</strong>：針對學術論文結構優化文本切分策略，保留完整的上下文語義。</span>
                    </li>
                </ul>
            </div>

            <div class="mb-6">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <i data-lucide="lightbulb" class="w-5 h-5 text-amber-400"></i> 技術挑戰與解決方案
                </h3>
                <div class="space-y-3">
                    <div class="bg-slate-800/50 p-4 rounded-xl border-l-4 border-blue-500 flex flex-col md:flex-row gap-4 items-start">
                        <div class="shrink-0 pt-1">
                            <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <i data-lucide="target" class="w-4 h-4"></i>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-blue-400 font-bold mb-1">精確度優化</h4>
                            <p class="text-slate-300 text-sm">針對學術用語進行 Embedding 模型微調與實驗，找出各領域最適合的向量化模型，顯著降低檢索雜訊。</p>
                        </div>
                    </div>
                    
                    <div class="bg-slate-800/50 p-4 rounded-xl border-l-4 border-purple-500 flex flex-col md:flex-row gap-4 items-start">
                        <div class="shrink-0 pt-1">
                            <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <i data-lucide="file-text" class="w-4 h-4"></i>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-purple-400 font-bold mb-1">長文本處理</h4>
                            <p class="text-slate-300 text-sm">設計滑動視窗 (Sliding Window) 與父子文檔索引 (Parent-Child Indexing) 策略，有效解決長篇論文的語義斷裂問題。</p>
                        </div>
                    </div>

                    <div class="bg-slate-800/50 p-4 rounded-xl border-l-4 border-green-500 flex flex-col md:flex-row gap-4 items-start">
                        <div class="shrink-0 pt-1">
                            <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <i data-lucide="scale" class="w-4 h-4"></i>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-green-400 font-bold mb-1">檢索效能平衡</h4>
                            <p class="text-slate-300 text-sm">實作重排序 (Re-ranking) 機制，在保持高召回率的同時，確保最相關的文檔排序在 LLM 的 Context Window 前端。</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        "video": "",
        "images": ["assets/projects/paperassist/RAGChatBot-1.png"],
        "tags": ["Python", "RAG", "LLM", "VectorDB", "NLP"],
        "links": {
            "github": "https://github.com/yChiNL/rag_chatbot",
            "demo": ""
        }
    }
};
