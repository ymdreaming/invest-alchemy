# ETF投资助手

这是一款聚焦于ETF投资组合管理的交易助手工具，目标是根据交易策略，每日通过邮件方式更新ETF交易建议.

## 待办事项

- 
  - 数据源
    - [x] [Tushare](https://tushare.pro/)
    - [ ] [AKShare](https://akshare.xyz/)
  - 交易策略
    - [x] 双均线策略
    - [ ] 海龟法则
  - 回测
    - [ ] Spike [backtrader](https://github.com/mementum/backtrader), maybe we can use it to do the strategy backtesting before we go to implement the strategy signal.
    - [ ] ETF相似性计算，用于选择标的
      - https://www.etf.com/etfanalytics/etf-comparison-tool
  - 市场
    - [ ] 指数历史 P/E Ratio
    - [x] 全球指数的历史数据(000905/000300/399006/HSI/IXIC/INX)
  - 投资组合
    - [x] 交易记录/基金/持有/净值/收益率台账
      - [ ] 增加资金组合利用率(持有资产 / 总资产)
    - [x] 增加主流基金净值比较
    - [x] 支持交易A股ETF/LOF基金
    - [x] 支持交易A股股票
    - [ ] 支持交易A股公募基金（不包括 ETF/LOF）
  - 交易模块
    - 用户
      - [x] 支持用户投资组合计算
    - 机器人
      - 双均线 (11/22)
        - [x] 长期ETF策略机器交易
        - [x] 完全策略交易
  - 网页UI
    - [x] 重新设计UI界面 
      - [x] 投资组合风险监视器
      - [x] 投资组合持有/交易/基金历史
  - 通知
    - [x] 邮件
    - [ ] 展示不同的策略信号（每天）
    - [ ] 展示不同交易机器人的投资组合性能报告（每周）
    - [ ] 通过邮件/rss订阅制定投资组合的交易事件

- 架构优化
  - 存储
    - [x] 增加数据库模式迁移宫剧
    - [x] SQLite DB 备份至 AWS S3
    - [x] 交易数据存储在SQLite

- Bug Fix
  - [x] Trading signals error when double ma price are same.
  - [ ] Portfolio performance ledger max_days_of_continuous_loss calculation error, max is 5, because the days_of_continuous_loss will set to 0 when on non-trade days.

## 笔记

### 交易策略

- 参考工程
  - [Sequoia](https://github.com/sngyai/Sequoia)

- Issue
  - **Split-adjusted share prices**: Use `qfq` adjust price to generate trade signals.
  
- Note
  - Why the trade strategy may not good at trading stock?
    - Compare index, stocks have the liquidity problem and suspension risk. Liquidity can lead to a huge gap between simulated trading and actual trading results, suspension will result in inability to trade, producing results that are completely different from simulated trading.
  - **About strategy backtesting overfitting**: Backtesting overfitting may be a killer in trade stragety, so we not pursue the profit maximization by overfitting, just using the simple trade strategy to overcome the market volatility.



## Post

- [投资炼金术](https://www.bmpi.dev/money/invest-alchemy/)
- [Serverless应用开发小记](https://www.bmpi.dev/dev/guide-to-serverless/)
- [Adventures in Serverless Application Development](https://www.bmpi.dev/en/dev/guide-to-serverless/)

