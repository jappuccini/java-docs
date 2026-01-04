import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

export default function Exercise({ branchSuffix }): React.JSX.Element {
  return (
    <Tabs>
      <TabItem value="exercise" label="Exercise" default>
        <CodeBlock language="console">
          {`git switch exe/${branchSuffix}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="solution" label="Solution">
        <CodeBlock language="console">
          {`git switch sol/${branchSuffix}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="pullrequest" label="Diff">
        Alle  Änderungen zwischen der Aufgabe und der Lösung findest du{' '}
        <Link
          to={`https://github.com/jappuccini/java-exercises/compare/exe/${branchSuffix}...sol/${branchSuffix}?diff=split&w`}
        >
          hier
        </Link>
      </TabItem>
    </Tabs>
  );
}
