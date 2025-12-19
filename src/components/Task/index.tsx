import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';

export default function Task({ pullRequest, branchSuffix }): React.JSX.Element {
  return (
    <Tabs>
      <TabItem value="task" label="task" default>
        <CodeBlock language="console">
          {`git switch task/${branchSuffix}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="solution" label="Solution">
        <CodeBlock language="console">
          {`git switch solution/${branchSuffix}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="pullrequest" label="Pull Request">
        Alle  Änderungen zwischen der Aufgabe und der Lösung findest du im Pull
        Request{' '}
        <Link
          to={`https://github.com/jappuccini/java-exercises/pull/${pullRequest}/files?diff=split`}
        >
          PR#{pullRequest}
        </Link>
      </TabItem>
    </Tabs>
  );
}
