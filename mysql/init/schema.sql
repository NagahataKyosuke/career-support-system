CREATE TABLE IF NOT EXISTS experiences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  start_period VARCHAR(50),
  schedule TEXT,
  sites TEXT,
  recommendation INT,
  merit TEXT,
  demerit TEXT,
  motivation TEXT,
  gakuchika TEXT,
  difficulty TEXT,
  research_method TEXT,
  research_tool TEXT,
  self_analysis TEXT,
  self_analysis_advice TEXT,
  advice TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);