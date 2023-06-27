import {
  CommonActions,
  NavigationAction,
  NavigationContainerRef
} from '~/modules';

type RouteParams = Record<string, unknown>;

export type RoutesName = keyof PublicStackParams;

let navigator: NavigationContainerRef<any>;

export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function setNavigatorRef(
  navigatorRef: NavigationContainerRef<any>
): void {
  navigator = navigatorRef;
}

export function navigate(routeName: RoutesName, params?: RouteParams): void {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params
    })
  );
}

export function goBack(): void {
  navigator.dispatch(CommonActions.goBack());
}
