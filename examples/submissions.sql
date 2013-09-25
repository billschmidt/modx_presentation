create table `form_submissions` (
  id int unsigned not null auto_increment,
  `name` varchar(255),
  `email` varchar(255),
  `comments` text,
  `date` timestamp default current_timestamp,
  primary key (`id`),
  fulltext(`name`, `email`, `comments`)
) ENGINE=MyISAM;