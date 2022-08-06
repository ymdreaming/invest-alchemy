-- liquibase formatted sql

-- changeset invest_alchemy:2

CREATE TABLE invest_alchemy.dma_trade_signal
(
  trade_id              INTEGER PRIMARY KEY,
  trade_date            TEXT NOT NULL,
  trade_code            TEXT NOT NULL,
  trade_name            TEXT,
  trade_type            INTEGER, -- Buy(1), Sell(-1)
  trade_timestamp       INTEGER DEFAULT (datetime('now','utc'))
);

--rollback DROP TABLE invest_alchemy.dma_trade_signal;