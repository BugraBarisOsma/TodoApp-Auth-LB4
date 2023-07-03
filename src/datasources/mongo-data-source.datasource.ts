import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongoDataSource',
  connector: 'mongodb',
  url: 'mongodb://localhost:27017',
  host: 'localhost',
  port: 27017,
  user: '',
  password: '',
  database: 'todo',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDataSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
