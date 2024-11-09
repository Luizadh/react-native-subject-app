import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'

import { Dashboard } from "../pages/Dashboard";
import { ListExpenses } from "../pages/ListExpenses";
import { SearchExpenses } from "../pages/SearchExpenses";


type AppRoutes = {
  dashboard: undefined;
  listExpenses: undefined;
  searchExpenses: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const theme = useTheme()
  return (
    <Navigator screenOptions={{
      headerShown: false,
      // tabBarShowLabel: false,
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarStyle: {
        height: 88
      }
    }}>
      <Screen
        name='dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='add'
              size={30}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='listExpenses'
        component={ListExpenses}
        options={{
          tabBarLabel: 'List Expenses',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='format-list-bulleted'
              size={30}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='searchExpenses'
        component={SearchExpenses}
        options={{
          tabBarLabel: 'Search Expenses',
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name='search'
              size={30}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )

}