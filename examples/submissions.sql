create table `form_submissions` (
  id int unsigned not null auto_increment,
  `name` varchar(255),
  `email` varchar(255),
  `comment` text,
  primary key (`id`),
  fulltext(`name`, `email`, `comment`)
) ENGINE=MyISAM;